const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
var choices = [
    "heads",
    "tails"
  ];
  
   var output = choices[Math.floor(Math.random()*choices.length)];
   
   const embed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle('💰 You flipped a coin! 💰')
   .setDescription (`It landed on ${output}.`)
   .setTimestamp()
   .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

    message.channel.send(embed);

    
  }

module.exports.config = {
    name: "cf",
    description: "Flips a coin.",
    usage: "cf",
    accessableby: "v?cf",
    aliases: ["coinflip"]
}
  