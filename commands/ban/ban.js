const { MessageActivityType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Banuje danego użytkownika',
    usage: '!ban (osoba) (komunikat-powod) (czas)',
    execute : async(message,args) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            if(!reason) reason = "Nie podano powodu";
            member.ban()
            .then(() => {
                member.send(`Zostałeś zbanowany z powod: ${reason}`)
                message.reply(`Pomyśle zbanowano użytkownika ${member.displayName} z powodu : ${reason}`)
                console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${member}`)
                console.log(`---------------------------`)
                console.log(`Zbanowano użytkownika: Tak`)
                console.log('---------------------------')
            }).catch(error => {
                message.reply(`Przepraszam ${message.author} nie mogę zbanować użytkownika, poniważ: ${error}`)
            });
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