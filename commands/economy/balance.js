const economy = require('../../util/economy')
const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (message, args) => {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    message.reply(`That user has ${coins} coins!`)
  }

module.exports.config = {
    name: "bal",
    description: "Shows a user's balance",
    usage: "bal",
    accessableby: "v?bal",
    aliases: ["balance", "coins"]
}
  