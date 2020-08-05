const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {
        if (args[0] === 0) return message.reply('Please mention a user!')
        var person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!person) return message.reply("I either cant find " + person + " or you didn't mention a person! Ex v?tban @user 1d")
       

        let time = args[1];
        if (!time) {
            return message.reply("You didnt specify a time!");
        }

        message.guild.members.ban(person)

        message.channel.send(`@${person.user.tag} has now been banned for ${ms(ms(time))}`)
        setTimeout(function () {

            message.guild.members.unban(person)
            message.channel.send(`@${person.user.tag} has been unbanned.`)
        }, ms(time));
    } else {
        message.reply("Insufficient Permissions!");

    }
}

module.exports.config = {
    name: "tban",
    description: "temporarialy bans members from server",
    usage: "tban",
    accessableby: "v?tban <user>",
    aliases: []
}