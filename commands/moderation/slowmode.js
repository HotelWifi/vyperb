const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const ms = require("ms");
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
        var time = message.content.split(' ').slice(1).join(' ')
        if (!time) return message.reply('Please enter a time in seconds!')
        message.channel.setRateLimitPerUser(time)
        message.channel.send('Set the slowmode!')
    } else message.channel.send('Insuffiecient Permissions!')
}


module.exports.config = {
    name: "slowmode",
    description: "puts a channel in slowmode.",
    usage: "slowmode",
    accessableby: "v?slowmode <time>",
    aliases: []
    }