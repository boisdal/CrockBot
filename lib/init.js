import { food, tagList } from '#lib/food';
import { recipes } from '#lib/recipes';
import { getRecipes } from '#lib/tools';
import fs from 'fs';


export const initFood = (bot, mode) => {
    bot.food = food.filter(f => f.mode == mode);
    bot.food.byId = function (id) {
        let i = this.length;
        while (i--) {
            if (this[i].id === id) {
                return this[i];
            }
        }
    };
}

export const initUniqueFood = (bot) => {
    bot.uniqueFood = [];
    let uniqueFoodAttributes = [];
    let specialFoods = ['monstermeat', 'berries'];
    let specialfoodBuffer = [];
    
    for (const key in bot.food) {
        let f = bot.food[key];
        let foodAttributes = {};
        for (let tag of tagList) {
            foodAttributes[tag.name] = f[tag.name]
        }
        if (uniqueFoodAttributes.every((foodItem) => (tagList.some((tag) => f[tag.name] != foodItem[tag.name])))) {
            uniqueFoodAttributes.push(foodAttributes);
            if (specialFoods.some((id) => f.id.startsWith(id))){
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

const bruteforceRecipeExamples = (bot) => {
    console.log('starting to bruteforce recipe examples')
    let finalResult = {}
    for (let r of bot.recipes) {
        let target = r.id;
        let found = false;
        for (let ing1 of bot.uniqueFood) {
            for (let ing2 of bot.uniqueFood) {
                for (let ing3 of bot.uniqueFood) {
                    for (let ing4 of bot.uniqueFood) {
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