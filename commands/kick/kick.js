const { MessageActivityType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kickuje danego gracza',
    usage: '!kick (osoba) (komunikat-powod)',
    execute: async (message,args) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            let reason = args.slice(1).join(" ");
            if(!reason) reason = "Nie podano powodu";
            message.mentions.members.first().send(`Zostałeś wyrzucony z powodu: ${reason}`)
            message.mentions.members.first().kick(reason)
            .catch(error => message.reply(`Przepraszam ${message.author} nie mogę wyrzucić użytkownika bo : ${error}`))
            message.reply(`Wyrzucono pomyślnie użytkownika ${message.mentions.members.first().displayName} z powodu : ${reason}`) 
            console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${member}`)
                console.log(`---------------------------`)
                console.log(`Wyrzucono użytkownika: Tak`)
                console.log('---------------------------')
        }

            else{
                message.reply('Nie posiadasz uprawnień by użyć tej komendy!')
                console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${message.mentions.members.first()}`)
                console.log(`--------------------`)
                console.log(`----Brak dostępu----`)
                console.log('--------------------')
            }
        }

    }