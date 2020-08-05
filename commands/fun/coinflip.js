const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
var choices = [
    "heads",
    "tails"
  ];
  
   var output = choices[Math.floor(Math.random()*choices.length)];
    
    message.channel.send(`You got **${output}!**`);
    
  }

module.exports.config = {
    name: "cf",
    description: "flips a coin",
    usage: "cf",
    accessableby: "v?cf",
    aliases: []
}
  