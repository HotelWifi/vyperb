const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const catFacts = require('cat-facts');
 
let randomFact = catFacts.random();

const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🐱 Here is your cat fact! 🐱')
            .addFields(
                { name: `Your Fact:`, value: `${randomFact}.` }
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
            message.channel.send(embed)

}

module.exports.config = {
    name: "catfact",
    description: "Gives facts about cats.",
    usage: "catfact",
    accessableby: "v?catfact",
    aliases: ["catfacts"]
}