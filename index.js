// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('youtube', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send();
    else if (command === 'AA') return msg.channel.send(A AA);
});

client.login('NTM4MDAwOTkwODE3NzQ2OTU3.DytklQ.DhA6CphMC8-_vY9mQxZeOhEIRmU');
