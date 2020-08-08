const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead. ;)`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor(`#0099ff`)
            .setAuthor(`Vyper Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
    const embed = new Discord.MessageEmbed()
            .setTitle("Click Here To Vote For Us!")
            .setAuthor('Standard Commands List', 'https://images-ext-2.discordapp.net/external/cbb5n32f1097vTdQ2CPJDj1ZRGBov0FQffMnh8a8mQ8/https/cdn.discordapp.com/avatars/736832062757142580/c1cf6dc3d17aa27f1476ac5ae54b5db8.webp')
            .setDescription("Use ``v?help [command]`` to get more help! Example: ``v?help ttt``\n")
            .setURL("https://discord.boats/bot/736832062757142580")
            .setColor('#0099ff')
            .addFields(
                { name: `\u200B`, value: '\u200B'},
                { name: `:information_source:  General Info`, value: '``v?help`` ``v?vote`` \n``v?support`` ``v?invite``\n ``v?ping``', inline: true },
                { name: `   :moneybag:  Economy and Levels`, value: '   ``v?level`` ``v?bal`` \n``v?pay``', inline: true },
                { name: `   :ghost:  Social`, value: '  ``v?stats`` ``v?info``', inline: true },
                { name: `\u200B`, value: '\u200B'},
                { name: `:game_die:  Fun and Games`, value: '``v?ttt`` ``v?ms`` ``v?cf`` \n``v?lyrics`` ``v?meme`` \n``v?recipe`` ``v?8ball``\n ``v?catfact``', inline: true },
                { name: `:hammer_pick:  Moderation`, value: '``v?ban`` ``v?kick`` ``v?mute``\n``v?slowmode`` ``v?tban`` ``v?unmute``\n``v?addbal``', inline: true },
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
            


        message.channel.send(embed);
}}


module.exports.config = {
    name: "help",
    description: "Opens the help menu.",
    usage: "v?help",
    accessableby: "v?help",
    aliases: []
}
