const Discord = require('discord.js')
const botsettings = require('./botsettings.json')
const bot = new Discord.Client({
    disableEveryone: true
})
const mongoose = require('mongoose');
bot.mongoose = require('./util/mongoose');
const level = require('./util/levels')
const mongo = require('./util/mongoose');
const lconfigSchema = require('./schemas/lconfig-schema')






bot.on("ready", async () => {
    const result = await lconfigSchema.find({
        lconfig: 'false',
    })
    console.log('Result:', result)
    console.log("ready");
});














bot.on("guildCreate", guild => {
    const user = bot.users.cache.get(guild.ownerID);
    const invite = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Hi there! - Click To Vote For Me!')
        .setURL('https://discord.boats/bot/736832062757142580')
        .setDescription('Thanks for adding me to your server! You got my developer one step closer to being verified,and he wants to let you know that he apprieciates it! Make sure to use ``v?help`` to check out my list of commands!')
        .setTimestamp()
        .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
    user.send(invite)
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
    if (message.channel.id === '740752059737047131') {
        message.react('👍');
        message.react('👎');
    }
    if (message.author.bot || message.channel.type === "dm") return;

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
bot.login(botsettings.token)