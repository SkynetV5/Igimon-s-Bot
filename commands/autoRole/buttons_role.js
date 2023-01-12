const Discord = require('discord.js');

module.exports = {
    name: 'buttonroles',
    description: 'Wyswietla Role serwera',
    usage: '!buttonroles',
    execute : async(message,args) => {
        const buttons = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
            .setCustomId('member')
            .setEmoji('🕵️')
            .setLabel('member')
            .setStyle('Secondary'),

            new Discord.ButtonBuilder()
            .setCustomId('WarZone')
            .setEmoji('🎮')
            .setLabel('WarZone')
            .setStyle('Secondary'),

            new Discord.ButtonBuilder()
            .setCustomId('Battlefield Player')
            .setEmoji('🕹️')
            .setLabel('Battlefield Player')
            .setStyle('Secondary'),

            new Discord.ButtonBuilder()
            .setCustomId('Fallout Player')
            .setEmoji('☢️')
            .setLabel('Fallout Player')
            .setStyle('Secondary'),

            new Discord.ButtonBuilder()
            .setCustomId('CS:GO Player')
            .setEmoji('🔫')
            .setLabel('CS:GO Player')
            .setStyle('Secondary'),
        );
        const embed = new Discord.EmbedBuilder()
        .setTitle('Wybierz Role - Choose the role:')


        message.channel.send({embeds : [embed],components : [buttons]})
    }
    
}