// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('youtube', {type: 'STREAMING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(A ) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr( );
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send();
    else if (command === 'AA') return msg.channel.send(AAA);
});

client.login('NTM4MDAwOTkwODE3NzQ2OTU3.DytklQ.DhA6CphMC8-_vY9mQxZeOhEIRmU');
