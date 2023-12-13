import { EmbedBuilder, AttachmentBuilder }  from 'discord.js';
import { food } from '#lib/food';
import { requirementArrayToHuman } from '#lib/tools';
import { total_day_time } from '#lib/constants'

const getAttachmentFromName = (name) => {
    let formattedName = name.toLowerCase().replaceAll(' ', '_');
    let attachment = new AttachmentBuilder()
    .setFile(`img/${formattedName}.png`)
    .setName(`${formattedName}.png`);
    return attachment;
}

const getColorFromHHS = (health, hunger, sanity) => {
    if (sanity >= hunger && sanity >= health) {return 0xBC5302;}
    if (health >= hunger) {return 0xA10200;}
    return 0xDD9C00;
}

export const createEmbedForCook = (recipeArray, ingredientlist, ephemeral) => {
    let embedArray = [];
    let fileArray = [];
    let bestPriority = recipeArray[2].priority;
    for (let i=2; i<recipeArray.length; i++) {
        let recipe = recipeArray[i];
        if (recipe.priority == bestPriority) {
            let resultName = recipe.name;
            let resultAttachment = getAttachmentFromName(resultName);
            fileArray.push(resultAttachment);
            let ingredientsString = ingredientlist.map((i) => food[i].name).join(', ');
            let embed = new EmbedBuilder()
                .setColor(getColorFromHHS(recipe.health, recipe.hunger, recipe.sanity))
                .setTitle('Recipe\'s result')
                .setThumbnail(`attachment://${resultAttachment.name}`)
                .setDescription(resultName)
                .addFields(
                    { name: 'Ingredients', value: ingredientsString },
                    { name: '<:dst_health:1181367695745241098> Health', value: `${recipe.health}`, inline: true},
                    { name: '<:dst_hunger:1181367773750886511> Hunger', value: `${recipe.hunger}`, inline: true},
                    { name: '<:dst_sanity:1181367820894867576> Sanity', value: `${recipe.sanity}`, inline: true},
                );
            embedArray.push(embed);
        }
    }
    

    let message = {embeds: embedArray, files: fileArray, ephemeral: ephemeral};
    return message;
}

export const createEmbedForRecipe = (recipe, ephemeral) => {
    let reqString = requirementArrayToHuman(recipe.requirements);
    let resultAttachment = getAttachmentFromName(recipe.name);
    let perishDays = recipe.perish / total_day_time;

    let embed = new EmbedBuilder()
        .setColor(getColorFromHHS(recipe.health, recipe.hunger, recipe.sanity))
        .setTitle(`${recipe.name}'s recipe :`)
        .setThumbnail(`attachment://${resultAttachment.name}`)
        .setDescription(reqString.join('\n'))
        .addFields(
            { name: '<:dst_health:1181367695745241098> Health', value: `${recipe.health}`, inline: true},
            { name: '<:dst_hunger:1181367773750886511> Hunger', value: `${recipe.hunger}`, inline: true},
            { name: '<:dst_sanity:1181367820894867576> Sanity', value: `${recipe.sanity}`, inline: true},
            { name: 'Perish base time', value: `${perishDays} days.\n(Impacted by fridges, weather and other things)`},
        );

    let message = {embeds: [embed], files: [resultAttachment], ephemeral: ephemeral};
    return message;
}

export const createEmbedForTag = (foodItemArray, tagName, ephemeral) => {
    let resultAttachment = getAttachmentFromName('crockpot');

    let embed = new EmbedBuilder()
        .setTitle(`Ingredients with ${tagName} tag :`)
        .setThumbnail(`attachment://${resultAttachment.name}`)
        .setDescription(foodItemArray.join(', '));

    let message = {embeds: [embed], files: [resultAttachment], ephemeral: ephemeral};
    return message;
}

export const createEmbedForHelp = (topicAnswer, ephemeral) => {
    let resultAttachment = getAttachmentFromName(topicAnswer.thumbnail);

    let embed = new EmbedBuilder()
        .setTitle(topicAnswer.title)
        .setThumbnail(`attachment://${resultAttachment.name}`)
        .addFields(topicAnswer.sections);

    let message = {embeds: [embed], files: [resultAttachment], ephemeral: ephemeral};
    return message;
}