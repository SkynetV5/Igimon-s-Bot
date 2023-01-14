const { messageLink } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'unban',
    description: 'Odbanowuje użytkownika',
    usage: '!unban (osoba)',
    execute: async(message,argv) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            let bannerUser = argv[0];
            if(!bannerUser) return message.reply("Musisz oznaczyć użytkownika którego chcesz odbanować np. !unban username")
            message.guild.bans.fetch()
            .then(bans => {
                let user = bans.find(ban => ban.user.username === bannerUser);
                if(user){
                    message.guild.members.unban(user.user.id)
                message.reply(`Pomyślnie odbanowano użytkownika o nazwie: ${bannerUser}`)
                console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy ban na użytkowniku ${user}`)
                console.log(`---------------------------`)
                console.log(`Odbanowano użytkownika: Tak`)
                console.log('---------------------------')
                }
                else{
                    message.reply(`Nie ma takiego użytkownika na liście banów.`)
                }
            }).catch(error =>
                message.reply(`Przepraszam ${message.author} nie udało się odbanować użytkownika ponieważ ${error}`))
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