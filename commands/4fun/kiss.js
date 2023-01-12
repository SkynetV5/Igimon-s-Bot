const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    description: 'Wyswietla avatar uzytkownika',
    usage: '!kiss (osoba)',
    execute: async(message,args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) 
        {
            user = mention.user;
            let random_Number = Math.floor(Math.random() * 3) + 1;
            if(random_Number == 1){
                message.reply(`${message.author} całuje ${user}`);
            }
            if(random_Number == 2){
                message.reply(`${message.author} namiętnie całuje ${user}`);
            }
            if(random_Number == 3){
                message.reply(`${user} nie odwzajemnia twojego całusa ${message.author}`);
            }

        }
        else 
        {
            user = message.author;
            message.reply('how');
        }
        
    }
}