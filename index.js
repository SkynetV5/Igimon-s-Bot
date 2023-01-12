
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');

const {GatewayIntentBits} = require('discord.js');

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
   
  ]
})

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for(const folder of commandFolders){
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

  for(const file of commandFiles){
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name,command);
  }
}

const prefix = '!';

client.once('ready', () => {
    console.log('-----Bot-Is-Online-----');
    client.user.setActivity('Admin-Bot | !help');
});

client.on('messageCreate', async message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    try{
      command.execute(message,args);
    } catch (error){
      console.error(error);
      message.reply('Komenda nie dziala');
    }
});

client.on('guildMemberAdd', member =>{

  const channel = member.guild.channels.cache.find(ch => ch.name === 'role-roles');
  if(!channel) return;

  if(channel.type === 'text') {
    channel.messages.fetch({limit:10})
    .then(message =>{
      const msgArray = messages.array();
      msgArray.reverse().forEach(message => {
        member.send(`${message.author.username}:${message.content}`);
      });
    })
    .catch(console.error);
  }
})

client.on('interactionCreate', async interaction =>{
  
  if(interaction.customId == 'member'){
    const roleId = '348215750856540168';
    const role = interaction.guild.roles.cache.get(roleId);

    if(interaction.member.roles.cache.has(roleId)){
      await interaction.member.roles.remove(role);
    } 
    else{
      await interaction.member.roles.add(roleId);
    }

    await interaction.deferUpdate();

    }
    if(interaction.customId == 'WarZone'){
      const roleId = '591228844531253248';
      const role = interaction.guild.roles.cache.get(roleId);
  
      if(interaction.member.roles.cache.has(roleId)){
        await interaction.member.roles.remove(role);
      } 
      else{
        await interaction.member.roles.add(roleId);
      }
  
      await interaction.deferUpdate();
  
      }
      if(interaction.customId == 'Battlefield Player'){
        const roleId = '377556419282468864';
        const role = interaction.guild.roles.cache.get(roleId);
    
        if(interaction.member.roles.cache.has(roleId)){
          await interaction.member.roles.remove(role);
        } 
        else{
          await interaction.member.roles.add(roleId);
        }
    
        await interaction.deferUpdate();
    
        }
      if(interaction.customId == 'Fallout Player'){
          const roleId = '787851971779362847';
          const role = interaction.guild.roles.cache.get(roleId);
      
          if(interaction.member.roles.cache.has(roleId)){
            await interaction.member.roles.remove(role);
          } 
          else{
            await interaction.member.roles.add(roleId);
          }
      
          await interaction.deferUpdate();
      
          }
          if(interaction.customId == 'CS:GO Player'){
            const roleId = '348213273218252808';
            const role = interaction.guild.roles.cache.get(roleId);
        
            if(interaction.member.roles.cache.has(roleId)){
              await interaction.member.roles.remove(role);
            } 
            else{
              await interaction.member.roles.add(roleId);
            }
        
            await interaction.deferUpdate();
        
            }
});


client.login(config.token);