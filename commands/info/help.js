const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Wyswietla liste komend',
    usage: '!help',
    execute : (message,args) => {
        const embed = new Discord.EmbedBuilder()
        .setColor('#34eba8')
        .setAuthor(({
            name: message.author.username,
            iconURL: message.author.avatarURL({dynamic: true})
        }))
        .setTitle('Lista Komend')
        .setDescription('__Chcąc wpisać daną komendę zacznij (!) : __')
        .addFields(
            {name: '-help', value: '_Wyświetla wszystkie komendy_'},
            {name: '-avatar', value :'_Wyświetla avatar użytkownika (bez oznaczenia użytkownika - wyświetli avatar osoby wpisującej komende)_'},
            {name: '-kiss', value :'_Całuje danego użytkownika (!kiss osoba)_'},
            {name: '-poke', value :'_Zaczepia gracza (!poke osoba)_'},
        )
        .setTimestamp()
        .setFooter({
            text: message.author.username,
           iconURL: message.author.avatarURL({dynamic: true})
        });
        message.reply({embeds: [embed], ephemeral: true });
    }
}