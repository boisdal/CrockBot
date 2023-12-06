import { EmbedBuilder, AttachmentBuilder }  from 'discord.js';
import { food } from '#lib/food';

const getAttachmentFromName = (name) => {
    let formattedName = name.toLowerCase().replace(' ', '_');
    let attachment = new AttachmentBuilder()
    .setFile(`img/${formattedName}.png`)
    .setName(`${formattedName}.png`);
    return attachment
}

export const createEmbedForRecipe = (result, ingredientlist) => {
    let chosenRecipe = result[2];
    let resultName = chosenRecipe.name;
    let resultAttachment = getAttachmentFromName(resultName);
    let ingredientsString = ingredientlist.map((i) => food[i].name).join(', ');
    console.log(result)
    let embed = new EmbedBuilder()
        .setColor(0x0099FF)
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