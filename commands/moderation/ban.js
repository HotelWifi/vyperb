  const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const content = args.join(' ').toLowerCase();
        const toBan = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(m => m.displayName.toLowerCase().includes(content) || m.user.tag.toLowerCase().includes(content));
        if (!args[0]) return message.channel.send('Not enough arguments');
        if (!toBan) return message.channel.send('The user can\'t be found.');
        if (!message.member.hasPermission('BAN_MEMBERS', { checkAdmin: true, checkOwner: true })) return message.channel.send('You don\'t have enough permissions to use this.')
        if (!message.guild.me.hasPermission('BAN_MEMBERS', { checkAdmin: true, checkOwner: true })) return message.channel.send('I don\'t have ban permission to ban member');
        toBan.ban();
        message.channel.send(`Succesfully banned ${toBan.user.tag}.`);
    } else {
        message.reply("Insufficient Permissions!");
    }
}


module.exports.config = {
    name: "ban",
    description: "bans members from server",
    usage: "ban",
    accessableby: "v?ban <user>",
    aliases: []
    }