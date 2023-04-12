const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Wyswietla liste komend',
    usage: '!help',
    execute : (message,args) => {
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
        const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setAuthor(({
            name: message.author.username,
            iconURL: message.author.avatarURL({dynamic: true})
        }))
        .setTitle('Lista Komend')
        .setDescription('__Chcąc wpisać daną komendę zacznij (!)/If you want to write down a command begin with (!) : __')
        .addFields(
            { name: 'Dla wszystkich/For everyone:', value: '\u200B' },
            {name: '-help', value: '_Wyświetla wszystkie komendy/Shows all commands_'},
            {name: '-avatar', value :'_Wyświetla avatar użytkownika (bez oznaczenia użytkownika - wyświetli avatar osoby wpisującej komende)/Shows users avatar(without pointed user yours avatar will be displayed)_'},
            {name: '-kiss', value :'_Całuje danego użytkownika (!kiss osoba)/Kisses pointed user_'},
            {name: '-poke', value :'_Zaczepia gracza (!poke osoba)/Pokes pointed user_'},
            { name: 'Dostępne dla Admina oraz Moderatora!/Restricted for Admin and Moderator only!', value: '\u200B' },
            {name: '-ban', value: '_Banuje użytkownika (!ban osoba powod)._'},
            {name: '-unban', value: '_Odbanuje użytkownika (!unban osoba)._'},
            {name: '-kick', value: '_Wyrzuca użytkownika (!kick osoba powod)._'},
            {name: '-mute', value: '_Wycisza użytkownika (!mute osoba)._'},
            {name: '-unmute', value: '_Odcisza użytkownika (!unmute osoba)._'}
        )
        .setTimestamp()
        .setFooter({
            text: message.author.username,
           iconURL: message.author.avatarURL({dynamic: true})
        });
        message.reply({embeds: [embed], ephemeral: true });
        console.log(`${new Date().toLocaleString()} - ${message.author}} używa komendy help`)
    }
}
