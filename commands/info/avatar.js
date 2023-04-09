const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Wyswietla avatar uzytkownika',
    usage: '!avatar (osoba)',
    execute: async(message,args) => {
        let user = null;
        const mention = message.mentions.members.first();
        let color = '#'
        for (let i = 0 ; i < 6; i++){
            let number = Math.floor(Math.random() * 16);
            if (number < 10){
                color += number
            }
            else{
                color += String.fromCharCode(87+number)
            }
        }
        if(mention) 
        {
            user = mention.user;
        }
        else 
        {
            user = message.author;
        }
        
        const embed = new Discord.EmbedBuilder()
        .setColor(color)
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
        console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy avatar na użytkowniku ${user}`)
    }
}