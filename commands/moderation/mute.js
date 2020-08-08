const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const ms = require("ms");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {

        const content = args.join(' ').toLowerCase();
        const toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const reason = args.slice(2).join(" ")
        if (!toMute) return message.channel.send(`The user can't be found.`);

        let role = message.guild.roles.cache.find(role => role.name === "muted");

        if (!args[0]) return message.channel.send('Please mention a member to mute!');
        if (!role) return message.reply(`I couldn't find the role named "muted". I am creating one now! Feel free to change the permissions :). Please rerun the command now.`).then(() =>
            message.guild.roles.create({
                data: {
                    name: 'muted',
                    color: 'GREY',
                    permissions: []
                },
                reason: 'mute',
            }));



        message.guild.channels.cache.forEach(channel => {
            channel.updateOverwrite(role, {
                SEND_MESSAGES: false
            });
        })




        let time = args[1];
        if (!time) {
            return message.reply("You didnt specify a time!");
        }

        const none = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🥳 You have succesfully muted a member. 🥳')
            .addFields(
                { name: `Succesfully muted ${toMute.user.tag}.`, value: `Reason: None provided.` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

        const yes = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🥳 You have succesfully muted a member. 🥳')
            .addFields(
                { name: `Succesfully kicked ${toMute.user.tag}.`, value: `Reason: ${reason}` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

        if (!reason) {
            message.channel.send(none)
        } else {
            message.channel.send(yes)
        }




        toMute.roles.add(role.id);


        const unMute = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`🥳 @${toMute.user.tag} has been unmuted. 🥳`)
            .addFields(
                { name: `Succesfully unmuted @${toMute.user.tag}.`, value: `Reason: ${reason}` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');


        setTimeout(function () {
            toMute.roles.remove(role.id);
            message.channel.send(unMute)
        }, ms(time));
    } else {
        message.reply("Insufficient Permissions!");

    }
}


module.exports.config = {
    name: "mute",
    description: "Mutes a member.",
    usage: "mute",
    accessableby: "v?mute <user>",
    aliases: []
}