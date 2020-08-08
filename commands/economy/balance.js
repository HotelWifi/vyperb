const economy = require('../../util/economy')
const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (bot, message, args) => {

  const target = message.mentions.users.first() || message.author
  const targetId = target.id

  const guildId = message.guild.id
  const userId = target.id


  const coins = await economy.getCoins(guildId, userId)
  const embed = new Discord.MessageEmbed()
    .setTitle(` 🤑 Balance 🤑 `)
    .setColor(`#0099ff`)
    .setDescription(`That members current balance is ${coins}! `)
    .setThumbnail(target.displayAvatarURL({ size: 64 }))
    .setTimestamp()
    .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

  message.channel.send(embed)
}

module.exports.config = {
  name: "bal",
  description: "Shows a user's balance.",
  usage: "bal",
  accessableby: "v?bal",
  aliases: ["balance", "coins"]
}
