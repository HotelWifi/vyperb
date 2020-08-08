const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const sug = args.slice(0).join(" ")
    const user = message.author.username
    const tag = message.author.tag
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('A new suggestion has appeared!')
        .setDescription(sug)
        .setTimestamp()
        .setFooter('Suggested by ' + tag, message.author.avatarURL);
        client.guilds.cache.get('740747581407232011').channels.cache.get('740752059737047131').send(embed)
}


module.exports.config = {
    name: "suggest",
    description: "Sends a suggestion to our support server.",
    usage: "suggest",
    accessableby: "v?suggest",
    aliases: ["suggestion", "sug"]
}