const Discord = require("discord.js");

module.exports = {
    name: 'rules',
    description: 'Show roles',
    usage: '!rules',
    execute: async(message,args) => {
        if(message.member.roles.cache.some(role => role.id === '348214257164353536') || message.member.roles.cache.some(role => role.id === '348205236940308480')){
            const embed  = new Discord.EmbedBuilder()
            .setColor('#ed2939')
            .setTitle(`Rules/Regulamin`)
            .setDescription('__Any failure to comply with the rules may result in a kick or ban./Każde nieprzestrzeganie zasad może skutkować kickiem lub banem.__')
            .addFields(
                {name:'\u200B', value:'\u200B'},
                {name:'1.No insulting players, humiliating, threatening, harassing, intimidation, coercion./Zakaz obrażania graczy, poniżania, gróźb, nękania,zastraszanie, zmuszanie.', value: '\u200B'},
                {name:'2.It is forbidden to clutter the chat (flood, spam, typing in capslock,spamming, swearing)./Zakaz zaśmiecania chatu (flood, spam, pisanie capslockiem, spamowanie, przeklinanie).', value: '\u200B'},
                {name:'3.No swearing, disturbing or insulting others voice channels./Zakaz przeklinania, przeszkadzania lub obrażania innych osób kanały głosowe.', value: '\u200B'},
                {name:'4.Prohibition of advertising other servers, sites, forums, etc./Zakaz reklamowania innych serwerów, stron, forów itp.', value: '\u200B'},
                {name:'5.Prohibition of impersonating the administration and players./Zakaz podszywania się pod administrację i graczy.', value: '\u200B'}
                )  
            message.channel.send({embeds: [embed], ephemeral:true})
        }
    }

}