const eightball = require('8ball')()
const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const q = args.slice(0).join(" ")
    if (!q) return message.channel.send('Please specify your question! Example: "v?8ball Will I be rich?".')
    const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🎱🎱 THE MIGHTY 8BALL HAS SPOKEN 🎱🎱')
            .addFields(
                { name: `Your Question:`, value: `${q}` },
                { name: `My response:`, value: `${eightball}` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
            message.channel.send(embed)

}

module.exports.config = {
    name: "8ball",
    description: "Gives your fortune.",
    usage: "8ball",
    accessableby: "v?8ball",
    aliases: ["eightball"]
}
  