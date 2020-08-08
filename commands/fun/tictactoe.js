const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {

    const TicTacToe = require('discord-tictactoe');
    const bot = new TicTacToe({
      clientId: '736832062757142580',
      token: 'NzM2ODMyMDYyNzU3MTQyNTgw.Xx0iVQ.PDoZnX_TLh6rIAWjyNlWZEo8NnM',
      language: 'en',
      command: 'v?ttt'
    }); 
    bot.connect().catch(() => console.error("Cannot connect TicTacToe bot"));
}
module.exports.config = {
    name: "ttt",
    description: "Starts a game of tictactoe.",
    usage: "ttt",
    accessableby: "v?ttt <user>",
    aliases: []
}