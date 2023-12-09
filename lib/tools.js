import {
	GIANTS,
	HAMLET,
	SHIPWRECKED,
	TOGETHER,
	VANILLA,
	base_cook_time,
	defaultStatMultipliers,
	modes,
	perish_fridge_mult,
	perish_ground_mult,
	perish_preserved,
	perish_summer_mult,
	perish_winter_mult,
	sanity_small,
	spoiled_food_hunger,
	stale_food_health,
	stale_food_hunger,
	total_day_time,
    operators,
    oppositeOperators
} from '#lib/constants';
import { food } from '#lib/food';
import { recipes, updateFoodRecipes } from '#lib/recipes';
import { isBestStat, isStat, pl } from '#lib/utils';
import { ANDTest, ORTest, NAMETest, NOTTest, SPECIFICTest, TAGTest } from '#lib/functions'

const modeRefreshers = [];

let statMultipliers = defaultStatMultipliers;

let modeMask = modes.together.mask;

const setMode = mask => {
    statMultipliers = {};

    for (const i in defaultStatMultipliers) {
        if (defaultStatMultipliers.hasOwnProperty(i)) {
            statMultipliers[i] = defaultStatMultipliers[i];
        }
    }

    modeMask = mask;

    updateFoodRecipes(recipes.filter(r => (modeMask & r.modeMask) !== 0));

};

const getRecipes = (() => {
    const recipeList = [];

    return items => {
        const names = {};
        const tags = {};

        recipeList.length = 0;
        modeMask = TOGETHER;
        setIngredientValues(items, names, tags);

        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].modeMask & modeMask) !== 0 && recipes[i].test(null, names, tags)) {
                recipeList.push(recipes[i]);
            }
        }

        recipeList.sort((a, b) => {
            return b.priority - a.priority;
        });

        // Add best row
        const bestTags = {...tags}
        bestTags.hunger = bestTags.bestHunger;
        bestTags.health = bestTags.bestHealth;
        bestTags.sanity = bestTags.bestSanity;

        bestTags.img = '';
        bestTags.name = 'Sum:Potential';
        bestTags.priority = ' ';
        bestTags.perish = 0;
        bestTags.cooktime = 0;
        delete bestTags.cook;

        recipeList.unshift(bestTags);

        // Add total row
        const totalTags = {...tags}

        totalTags.bestHunger = totalTags.hunger;
        totalTags.bestHealth = totalTags.health;
        totalTags.bestSanity = totalTags.sanity;

        totalTags.img = '';
        totalTags.name = 'Sum:Total';
        totalTags.priority = ' ';
        totalTags.perish = 0;
        totalTags.cooktime = 0;
        delete totalTags.cook;

        recipeList.unshift(totalTags);

        return recipeList;
    };
})();

const setIngredientValues = (items, names, tags) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item !== null) {
            names[item.id] = 1 + (names[item.id] || 0);

            for (const k in item) {
                if (item.hasOwnProperty(k) && k !== 'perish' && !isNaN(item[k])) {
                    let val = item[k]

                    if (isStat[k]) {
                        val *= statMultipliers[item.preparationType];
                    } else if (isBestStat[k]) {
                        val *= statMultipliers[item[k+'Type']];
                    }

                    tags[k] = val + (tags[k] || 0);
                } else if (k === 'perish') {
                    tags[k] = Math.min(tags[k] || perish_preserved, item[k]);
                }
            }
        }
    }
};

setMode(modeMask)

export const getRecipesFromIngredients = (ingredient_array) => {
    let result = getRecipes([food[ingredient_array[0]], food[ingredient_array[1]], food[ingredient_array[2]], food[ingredient_array[3]]])
    return result
}

export const getRecipeFromName = (name) => {
    return recipes[name]
}

export const getFoodItemArray = () => {
    let foodArray = []
    let foodChoices = food.filter(r => r.mode == 'together')
    for (const key in foodChoices) {
        foodArray.push({ name: foodChoices[key].name, value: foodChoices[key].id })
    }
    return foodArray
}

export const getRecipeArray = () => {
    let recipeArray = []
    let recipeChoices = recipes.filter(r => r.together)
    for (const key in recipeChoices) {
        recipeArray.push({ name: recipeChoices[key].name, value: recipeChoices[key].id })
    }
    return recipeArray
}

export const getFoodFromTag = (tagName) => {
    let dst_food = food.filter(f => f.mode == 'together')
    let result = dst_food.filter(f => f[tagName]);
    return result.map(f => {return `${f.name} (${f[tagName] === true ? 1 : f[tagName]})`})
}

export const requirementArrayToHuman = (requirementArray) => {
    let readableRequirementArray = [];
    for (let req of requirementArray) {
        let readableReq = requirementToHuman(req);
        readableRequirementArray.push(readableReq);
    }
    return readableRequirementArray
}

const requirementToHuman = (req, negation=false) => {
    if (req.test == ANDTest) {
        if (negation) {
            return `${requirementToHuman(req.item1, negation)} or ${requirementToHuman(req.item2, negation)}`;
        } else {
            return `${requirementToHuman(req.item1, negation)} and ${requirementToHuman(req.item2, negation)}`;
        }
    }
    if (req.test == ORTest) {
        if (negation) {
            return `${requirementToHuman(req.item1, negation)} and ${requirementToHuman(req.item2, negation)}`;
        } else {
            return `${requirementToHuman(req.item1, negation)} or ${requirementToHuman(req.item2, negation)}`;
        }
    }
    if (req.test == NAMETest) {
        if (negation) {
            return `No ${food[req.name].name} or its cooked variant.`;
        } else {
            return `At least 1 ${food[req.name].name} or its cooked variant.`;
        }
    }
    if (req.test == NOTTest) {
        return requirementToHuman(req.item, true);
    }
    if (req.test == SPECIFICTest) {
        if (negation) {
            return `No ${food[req.name].name}.`;
        } else {
            return `At least 1 ${food[req.name].name}.`;
        }
    }
    if (req.test == TAGTest) {
        if (req.qty.op) {
            if (negation) {
                return `${oppositeOperators[operators[req.qty.op]]} ${req.qty.qty} ingredient(s) with tag ${req.tag}.`;
            } else {
                return `${operators[req.qty.op]} ${req.qty.qty} ingredient(s) with tag ${req.tag}.`;
            }
        } else {
            if (negation) {
                return `No ingredient with tag ${req.tag}.`;
            } else {
                return `At least 1 ingredient with tag ${req.tag}.`;
            }
        }
    }
}