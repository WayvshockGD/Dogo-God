const Discord = require('discord.js');

const client = new Discord.Client(717776979461406772);

 

client.on('ready', () => {

    console.log('this bot is ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
