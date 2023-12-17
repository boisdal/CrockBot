import { food, tagList } from '#lib/food';
import { recipes } from '#lib/recipes';
import { getRecipes } from '#lib/tools';
import { ANDTest, ORTest, NAMETest, NOTTest, SPECIFICTest, TAGTest } from '#lib/functions'
import fs from 'fs';


export const initFood = (bot, mode) => {
    bot.food = food.filter(f => f.mode == mode);
    bot.food.byId = function (id) {
        let i = this.length;
        while (i--) {
            if (this[i].id.startsWith(id)) {
                return this[i];
            }
        }
    };
}

export const initUniqueFood = (bot) => {
    bot.uniqueFood = [];
    let uniqueFoodAttributes = [];
    bot.specialFoods = ['monstermeat', 'berries'];
    let specialfoodBuffer = [];
    
    for (const key in bot.food) {
        let f = bot.food[key];
        let foodAttributes = {};
        for (let tag of tagList) {
            foodAttributes[tag.name] = f[tag.name]
        }
        if (uniqueFoodAttributes.every((foodItem) => (tagList.some((tag) => f[tag.name] != foodItem[tag.name])))) {
            uniqueFoodAttributes.push(foodAttributes);
            if (bot.specialFoods.some((id) => f.id.startsWith(id))){
                specialfoodBuffer.push(f)
            } else {
                bot.uniqueFood.push(f);
            }
        }
    }
    for (let f of specialfoodBuffer) {
        bot.uniqueFood.unshift(f)
    }
}

const getSpecificFood = (bot, req) => {
    if (req.test == ANDTest || req.test == ORTest) {
        let firstFood = getSpecificFood(bot, req.item1)
        let secondFood = getSpecificFood(bot, req.item2)
        return firstFood.concat(secondFood);
    }
    if (req.test == NAMETest) {
        return [bot.food.byId(req.name)];
    }
    if (req.test == NOTTest) {
        return getSpecificFood(bot, req.item);
    }
    if (req.test == SPECIFICTest) {
        return [bot.food.byId(req.name)];
    }
    if (req.test == TAGTest) {
        return [];
    }
}

const getSpecificFoodList = (bot, recipe) => {
    let specificFood = [];
    for (let req of recipe.requirements) {
        let temp = getSpecificFood(bot, req);
        for (let t of temp) {
            specificFood.push(t)
        }
    }
    return specificFood;
}

const bruteforceRecipeExamples = (bot) => {
    console.log('starting to bruteforce recipe examples')
    let finalResult = {}
    for (let r of bot.recipes) {
        let target = r.id;
        let found = false;
        let foodList = getSpecificFoodList(bot, r);
        for (let f of bot.uniqueFood) {
            if (bot.specialFoods.some((id) => f.id.startsWith(id))){
                foodList.unshift(f);
            } else {
                foodList.push(f);
            }
        }
        console.log(`${Object.keys(finalResult).length} recipes found.`)
        for (let ing1 of foodList) {
            for (let ing2 of foodList) {
                for (let ing3 of foodList) {
                    for (let ing4 of foodList) {
                        let result = getRecipes(bot, [ing1, ing2, ing3, ing4]);
                        let maxPriority = result[2].priority;
                        for (let index = 2; index < result.length; index++) {
                            if (result[index].priority < maxPriority) {break;}
                            if (result[index].id == target) {
                                found = true;
                                finalResult[target] = [ing1.id, ing2.id, ing3.id, ing4.id]
                                break;
                            }
                        }
                        if (found) {break;}
                    }
                    if (found) {break;}
                }
                if (found) {break;}
            }
            if (found) {break;}
        }
        if (!found) {console.log(`No recipe found for ${r.name}`);}
    }
    return finalResult
}

export const initRecipes = (bot, mode) => {
    bot.recipes = recipes.filter(r => r.mode == mode);
    // bot.recipes = recipes.filter(r => ['meatballs_dst', 'wetgoop_dst'].includes(r.id));
    //console.log(Object.keys(bot.recipes))
    let examplePath = `./data/${mode}ExampleRecipes.json`;
    let examples = [];
    if (fs.existsSync(examplePath)) {
        examples = JSON.parse(fs.readFileSync(examplePath, 'utf-8'));
    } else {
        examples = bruteforceRecipeExamples(bot);
        fs.writeFile(examplePath, JSON.stringify(examples), 'utf8', (err) => {console.log(err)});
    }
    for (let key in bot.recipes) {
        if (Object.hasOwn(examples, bot.recipes[key].id)) {
            bot.recipes[key].example = examples[bot.recipes[key].id];
        } else {
            bot.recipes[key].example = null;
        }
    }
    bot.recipes.byId = function (id) {
        let i = this.length;
        while (i--) {
            if (this[i].id === id) {
                return this[i];
            }
        }
    };
}