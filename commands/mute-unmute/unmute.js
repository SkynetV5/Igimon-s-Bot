const { messageLink } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    description: 'Odcisza danego użytkownika',
    usage: '!unmute (osoba)',
    execute: async (message,argv) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            let memeber = message.mentions.members.first();
            if(!memeber.roles.cache.some(role => role.name === 'Muted')){
                message.reply(`${memeber.displayName} nie jest wyciszony.` )
            }
            else{
                memeber.roles.remove('1063873113298833439')
                .then(() => message.reply(` Pomyślnie odciszono użytkownika ${memeber.displayName}`),
                console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${memeber}`),
                console.log(`---------------------------`),
                console.log(`Odciszono użytkownika: Tak`),
                console.log('---------------------------'))
                .catch(error => message.reply(`Przepraszam ${message.author} nie mogę odciszyć użytkownika , ponieważ : ${error}`));
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
