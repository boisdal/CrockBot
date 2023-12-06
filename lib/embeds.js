import { EmbedBuilder, AttachmentBuilder }  from 'discord.js';
import { food } from '#lib/food';

const getAttachmentFromName = (name) => {
    let formattedName = name.toLowerCase().replace(' ', '_');
    let attachment = new AttachmentBuilder()
    .setFile(`img/${formattedName}.png`)
    .setName(`${formattedName}.png`);
    return attachment
}

const getColorFromHHS = (health, hunger, sanity) => {
    if (sanity >= hunger && sanity >= health) {return 0xBC5302}
    if (health >= hunger) {return 0xA10200}
    return 0xDD9C00
}

export const createEmbedForCook = (result, ingredientlist) => {
    let chosenRecipe = result[2];
    let resultName = chosenRecipe.name;
    let resultAttachment = getAttachmentFromName(resultName);
    let ingredientsString = ingredientlist.map((i) => food[i].name).join(', ');
    let embed = new EmbedBuilder()
        .setColor(getColorFromHHS(chosenRecipe.health, chosenRecipe.hunger, chosenRecipe.sanity))
        .setTitle('Recipe\'s result')
        .setThumbnail(`attachment://${resultAttachment.name}`)
        .setDescription(resultName)
        .addFields(
            { name: 'Ingredients', value: ingredientsString },
            { name: '<:dst_health:1181367695745241098> Health', value: `${chosenRecipe.health}`, inline: true},
            { name: '<:dst_hunger:1181367773750886511> Hunger', value: `${chosenRecipe.hunger}`, inline: true},
            { name: '<:dst_sanity:1181367820894867576> Sanity', value: `${chosenRecipe.sanity}`, inline: true},
        );

    let message = {embeds: [embed], files: [resultAttachment]};
    return message;
}

export const createEmbedForRecipe = (recipe) => {
    let resultAttachment = getAttachmentFromName(recipe.name);
    let embed = new EmbedBuilder()
    .setColor(getColorFromHHS(recipe.health, recipe.hunger, recipe.sanity))
        .setTitle(`${recipe.name}'s recipe :`)
        .setThumbnail(`attachment://${resultAttachment.name}`)
        //.setDescription(resultName)
        .addFields(
            { name: '<:dst_health:1181367695745241098> Health', value: `${recipe.health}`, inline: true},
            { name: '<:dst_hunger:1181367773750886511> Hunger', value: `${recipe.hunger}`, inline: true},
            { name: '<:dst_sanity:1181367820894867576> Sanity', value: `${recipe.sanity}`, inline: true},
        );

    let message = {embeds: [embed], files: [resultAttachment]};
    return message;
}