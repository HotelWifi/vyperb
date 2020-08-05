const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require("discord.js");
    const { formatDate } = require("../../function.js");
    
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
        message.member.roles.cache.forEach((role) => {
            roles.push(role.name);
        });
        Embed.setTitle(`Your info!`);
        Embed.setThumbnail(message.author.displayAvatarURL());
        Embed.setColor(`RANDOM`);
        Embed.setDescription(
            `Joined: ${formatDate(message.member.joinedAt)}\nID: ${
            message.author.id
            }\nRoles: ${roles}`
        );
        return message.channel.send(Embed);
    } else {
        let User = message.mentions.members.first();
        User.roles.cache.forEach((role) => {
            roles.push(role.name);
        });
        Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s info!`);
        Embed.setThumbnail(bot.users.cache.get(User.id).displayAvatarURL());
        Embed.setColor(`RANDOM`);
        Embed.setDescription(
            `Joined: (MM/DD/YYYY) ${formatDate(User.joinedAt)}\nID: ${
            User.id
            }\nRoles: ${roles}`
        );
        return message.channel.send(Embed);
    }
}


module.exports.config = {
    name: "info",
    description: "shows a users info",
    usage: "info",
    accessableby: "v?info <user>",
    aliases: []
}