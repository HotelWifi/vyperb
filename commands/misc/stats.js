const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    var mcount = client.users.cache.size
    var scount = client.guilds.cache.size
    var tcount = client.channels.cache.filter(c => c.type === 'text').size
    var vcount = client.channels.cache.filter(c => c.type === 'voice').size

    const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
    .setTitle('Vote for me here!')
    .setURL('https://discord.boats/bot/736832062757142580')
	.setDescription('**Here are my current stats:**')
	.setThumbnail(client.user.displayAvatarURL())
	.addFields(
		{ name: '``Server Count:``', value: [scount] },
        { name: '``Member Count:``', value: [mcount] },
        { name: '``Text Channel Count:``', value: [tcount] },
        { name: '``Voice Channel Count:``', value: [vcount] }
    )
    .setTimestamp()
    .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');

    message.channel.send(embed)

}


module.exports.config = {
    name: "stats",
    description: "Shows the bot's stats.",
    usage: "stats",
    accessableby: "v?stats",
    aliases: []
}