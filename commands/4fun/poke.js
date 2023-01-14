const Discord = require('discord.js');

module.exports = {
    name: 'poke',
    description: 'Zaczepia gracza',
    usage: '!poke (osoba)',
    execute: async(message,args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) 
        {
            user = mention.user;
            message.reply(`Hey ${user}`);
            console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy poke na uzytkownika ${user}`)
        }
        else 
        {
            console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy poke`)
            return;
            
        }
        
        
    }
}