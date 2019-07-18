
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am Online!');
  client.user.setActivity("With You..");
});

client.on('message', message => {
  if (message.content.startsWith(`$ip`)) {
    message.channel.send('**IP: ScytheMC.ml**\n**PORT: 25775**\n**STATUS: WHITELISTED**');
  } else if (message.content === `$server`) {
    message.channel.send(`**Server Owner: __NotRayZ__**\n**Server Name: __${message.guild.name}__**\n**Server Members: __${message.guild.memberCount}__**`);
  } 
  
});

client.login('NjAxNDI5ODQ5MzAyNzYxNTMz.XTCpKg.3ScwXS0Kq3pqp9EjcaOiCV0zbnU');