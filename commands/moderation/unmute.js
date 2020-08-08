const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    let role = message.guild.roles.cache.find(role => role.name === "muted");
    const toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    const unMute = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`🥳 @${toMute.user.tag} has been unmuted. 🥳`)
            .setDescription(`Succesfully unmuted @${toMute.user.tag}.`)
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

            toMute.roles.remove(role.id);
            message.channel.send(unMute)
            if(!role) return message.channel.send(`Canno't find the role, "muted".`)
            if(!toMute) return message.channel.send(`I canno't find the mentioned user.`)
}

module.exports.config = {
    name: "unmute",
    description: "Unmutes a member.",
    usage: "unmute",
    accessableby: "v?unmute <user>",
    aliases: []
}