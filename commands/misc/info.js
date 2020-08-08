const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const level = require('../../util/levels')
const economy = require('../../util/economy')

module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require("discord.js");
    const { formatDate } = require("../../function.js");
    const target = message.mentions.members.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const levels = await level.getLevels(guildId, userId)
    const coins = await economy.getCoins(guildId, userId)
    
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
        message.member.roles.cache.forEach((role) => {
            roles.push(role.name);
        });
        Embed.setTitle(`**Your info!**`);
        Embed.setThumbnail(message.author.displayAvatarURL());
        Embed.setColor(`#0099ff`);
        Embed.setDescription(
            `**Joined:** ${formatDate(message.member.joinedAt)}\n**ID:** ${
            message.author.id
            }\n**Roles:** ${roles}\n**Coins:** ${
                coins
            }\n**Level:** ${levels}`
        );
        return message.channel.send(Embed);
    } else {
        let User = message.mentions.members.first();
        User.roles.cache.forEach((role) => {
            roles.push(role.name);
        });
        Embed.setTitle(`**${bot.users.cache.get(User.id).tag}'s info!**`);
        Embed.setThumbnail(bot.users.cache.get(User.id).displayAvatarURL());
        Embed.setColor(`#0099ff`);
        Embed.setDescription(
            `**Joined:** ${formatDate(User.joinedAt)}\n**ID:** ${
            User.id
            }\n**Roles:** ${roles}\n**Coins:** ${
                coins
            }\n**Level:** ${levels}`
        );
        return message.channel.send(Embed);
    }
}


module.exports.config = {
    name: "info",
    description: "Shows a users info.",
    usage: "info",
    accessableby: "v?info <user>",
    aliases: []
}