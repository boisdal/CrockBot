import { defaultStatMultipliers, perish_preserved, operators, oppositeOperators } from '#lib/constants';
import { isBestStat, isStat } from '#lib/utils';
import { ANDTest, ORTest, NAMETest, NOTTest, SPECIFICTest, TAGTest } from '#lib/functions'

let statMultipliers = defaultStatMultipliers;

export const getRecipes = (bot, items) => {
    let recipeList = [];
    const names = {};
    const tags = {};
    setIngredientValues(items, names, tags);

    for (let i = 0; i < bot.recipes.length; i++) {
        if (bot.recipes[i].test(null, names, tags)) {
            recipeList.push(bot.recipes[i]);
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

export const getRecipesFromIngredients = (bot, ingredient_array) => {
    let ing1 = bot.food.byId(ingredient_array[0]);
    let ing2 = bot.food.byId(ingredient_array[1]);
    let ing3 = bot.food.byId(ingredient_array[2]);
    let ing4 = bot.food.byId(ingredient_array[3]);
    let result = getRecipes(bot, [ing1, ing2, ing3, ing4])
    return result
}

export const getFoodOptions = (bot) => {
    let foodArray = []
    let foodChoices = bot.food
    for (const key in foodChoices) {
        foodArray.push({ name: foodChoices[key].name, value: foodChoices[key].id })
    }
    return foodArray
}

export const getRecipeOptions = (bot) => {
    let recipeOptions = []
    for (const key in bot.recipes) {
        recipeOptions.push({ name: bot.recipes[key].name, value: bot.recipes[key].id })
    }
    return recipeOptions
}

export const requirementArrayToHuman = (bot, requirementArray) => {
    let readableRequirementArray = [];
    for (let req of requirementArray) {
        let readableReq = requirementToHuman(bot, req);
        readableRequirementArray.push(readableReq);
    }
    return readableRequirementArray
}

const requirementToHuman = (bot, req, negation=false) => {
    if (req.test == ANDTest) {
        if (negation) {
            return `${requirementToHuman(bot, req.item1, negation)} or ${requirementToHuman(bot, req.item2, negation)}`;
        } else {
            return `${requirementToHuman(bot, req.item1, negation)} and ${requirementToHuman(bot, req.item2, negation)}`;
        }
    }
    if (req.test == ORTest) {
        if (negation) {
            return `${requirementToHuman(bot, req.item1, negation)} and ${requirementToHuman(bot, req.item2, negation)}`;
        } else {
            return `${requirementToHuman(bot, req.item1, negation)} or ${requirementToHuman(bot, req.item2, negation)}`;
        }
    }
    if (req.test == NAMETest) {
        if (negation) {
            return `No ${bot.food.byId(req.name).name} or its cooked variant.`;
        } else {
            console.log(req.name)
            return `At least 1 ${bot.food.byId(req.name).name} or its cooked variant.`;
        }
    }
    if (req.test == NOTTest) {
        return requirementToHuman(bot, req.item, true);
    }
    if (req.test == SPECIFICTest) {
        if (negation) {
            return `No ${bot.food.byId(req.name).name}.`;
        } else {
            return `At least 1 ${bot.food.byId(req.name).name}.`;
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

export const test = () => {
    return 'aaaaaa'
}