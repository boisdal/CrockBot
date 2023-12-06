import {
	GIANTS,
	HAMLET,
	SHIPWRECKED,
	TOGETHER,
	VANILLA,
	base_cook_time,
	defaultStatMultipliers,
	headings,
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
	total_day_time
} from '#lib/constants';
import { food } from '#lib/food';
import { recipes, updateFoodRecipes } from '#lib/recipes';
import { isBestStat, isStat, pl } from '#lib/utils';

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
    //console.log(result)
    return result
}

export const getFoodItemArray = () => {
    let foodArray = []
    let foodChoices = food.filter(r => r.mode == 'together')
    for (const key in foodChoices) {
        foodArray.push({ name: foodChoices[key].name, value: foodChoices[key].id })
    }
    return foodArray
}