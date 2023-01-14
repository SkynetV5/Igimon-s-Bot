const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'Wycisza danego gracza',
    usage: '!mute (osoba)',
    execute: async (message,args) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            let member = message.mentions.members.first();
            if(member.roles.cache.some(role => role.name ==='Muted')){
                message.reply(`${member.displayName} już jest wyciszony`)
            }
            else{
                member.roles.add('1063873113298833439')
                .then(() => 
                message.reply(`Pomyślnie wyciszono użytkownika ${member.displayName}`),
                console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${member}`),
                console.log(`---------------------------`),
                console.log(`Wyciszono użytkownika: Tak`),
                console.log('---------------------------'))
                .catch(error => message.reply(`Przepraszam ${message.author} nie mogę wyciszyć użytkownika , ponieważ : ${error}`));
            }       
        }
        else{
            message.reply(`Nie masz uprawnień do tej komendy!`)
            console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${message.mentions.members.first()}`)
            console.log(`--------------------`)
            console.log(`----Brak dostępu----`)
            console.log('--------------------')
        }

    }
}