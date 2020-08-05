const Discord = require('discord.js')
const botsettings = require('./botsettings.json')
const bot = new Discord.Client({
    disableEveryone: true})
const mongoose = require('mongoose');
bot.mongoose = require('./util/mongoose');

bot.on('ready', async () => {
    console.log('This bot is ready for use!' + new Date())
})


require("./util/eventHandler")(bot)
bot.mongoose = require('./util/mongoose');

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFolder = fs.readdirSync('./commands').filter(folder => folder);
//go thru each foler
for (const folder of commandFolder) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    //go thru the folder and import all .js files
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.config.name, command);
        command.config.aliases.forEach(alias => {
            bot.aliases.set(alias, command.config.name)
        });
    }
}

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  let prefix = botsettings.prefix;
  let messageArray = message.content.split(" ");
  if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);
});

bot.on('ready', () => {
    level(bot);
  })
bot.mongoose.init();
bot.login(botsettings.token)