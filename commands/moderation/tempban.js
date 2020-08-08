const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const content = args.join(' ').toLowerCase();
        const toBan = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(m => m.displayName.toLowerCase().includes(content) || m.user.tag.toLowerCase().includes(content));
        const reason = args.slice(2).join(" ")

        if (!args[0]) return message.channel.send('Please mention a member to ban!');

        if (!toBan) return message.channel.send(`The user can't be found.`);

        toBan.ban({ reason: `${reason}` })

        let time = args[1];
        if (!time) {
            return message.reply("Please specify a valid time! EX: 10s; 10m; 10d.");
        }

        const none = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('⚡⚡ THE MIGHTY BAN HAMMER HAS AWAKEN ⚡⚡')
            .addFields(
                { name: `Succesfully banned ${toBan.user.tag}.`, value: `Reason: None provided.` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

        const yes = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('⚡⚡ THE MIGHTY BAN HAMMER HAS AWAKEN ⚡⚡')
            .addFields(
                { name: `Succesfully banned ${toBan.user.tag} for ${time}`, value: `Reason: ${reason}` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

        if (!reason) {
            message.channel.send(none)
        } else {
            message.channel.send(yes)
        }
        const unBan = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`⚡⚡ THE MIGHTY BAN HAMMER HAS REVERSED ITSELF ⚡⚡`)
            .addFields(
                { name: `Succesfully unbanned @${toBan.user.tag}.`, value: `Reason: ${reason}` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');


        setTimeout(function () {

            message.guild.members.unban(toBan)
            message.channel.send(unBan)
        }, ms(time));
    } else {
        message.reply("Insufficient Permissions!");

    }
}

module.exports.config = {
    name: "tban",
    description: "Temporarialy bans a member from a server.",
    usage: "tban",
    accessableby: "v?tban <user>",
    aliases: []
}