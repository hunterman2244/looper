// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('youtube', {type: 'STREAMING'});
});

client.on('message', msg => {
    if (message === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (message === 'invite') return msg.channel.send();
    else if (message === 'AA') return msg.channel.send(AA);
});

client.login('NTM4MDAwOTkwODE3NzQ2OTU3.DytklQ.DhA6CphMC8-_vY9mQxZeOhEIRmU');
