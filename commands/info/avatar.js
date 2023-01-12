const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Wyswietla avatar uzytkownika',
    usage: '!avatar (osoba)',
    execute: async(message,args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) 
        {
            user = mention.user;
        }
        else 
        {
            user = message.author;
        }
        
        const embed = new Discord.EmbedBuilder()
        .setColor('#16f5ea')
        .setAuthor({
            name: message.author.username,
            iconURL: message.author.avatarURL({dynamic: true})
        })
        .setTitle('Avatar')
        .setDescription(`Avatar użytkownika ${user}`)
        .setImage(user.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter({
            text: message.author.username,
           iconURL: message.author.avatarURL({dynamic: true})
        });
        message.reply({embeds: [embed]});
    }
}