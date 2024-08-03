const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ] 
});

const {addMember, wishUser, sendBotInfo, sendHelpMessage, wishNewUser } = require('./botFunctions');

client.on('ready', () => {
    console.log("Djinn is online");
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if(content.includes('add as member')) {
        const email = content.split('add as member')[1].trim();
        addMember(message.guild.ownerId, email).then(response => {
          message.reply(response);
        }).catch(error => {
          console.error("Error in addMember:", error);
          message.reply("An error occurred while adding the member");
        });
    } else if (content === 'info') {
        sendBotInfo(message);
    } else if (content === 'help') {
        sendHelpMessage(message);
    }
});

client.login(process.env.BOT_TOKEN);

module.exports = client;