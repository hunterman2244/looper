const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});

const prefix = '!';
client.on('message', message => {
  if (message.content.startsWith('AA')) {
      message.channel.sendMessage('AA');
  }
    
});

client.login(NTM4MDAwOTkwODE3NzQ2OTU3.DytklQ.DhA6CphMC8-_vY9mQxZeOhEIRmU);
