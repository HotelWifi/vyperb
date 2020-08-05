const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {

const Minesweeper = require('discord.js-minesweeper');
    
const minesweeper = new Minesweeper({
  returnType: 'emoji'
});
var mines = minesweeper.start()
message.channel.send(mines)


}

module.exports.config = {
    name: "ms",
    description: "starts a game of mindsweeper",
    usage: "ms",
    accessableby: "v?ms",
    aliases: []
}