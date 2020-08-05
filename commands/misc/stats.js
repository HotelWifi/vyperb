const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    var mcount = client.users.cache.size
    var scount = client.guilds.cache.size
    var tcount = client.channels.cache.filter(c => c.type === 'text').size
    var vcount = client.channels.cache.filter(c => c.type === 'voice').size

    const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Current Stats as of ' + new Date())
	.setDescription('Some description here')
	.setThumbnail(client.user.displayAvatarURL())
	.addFields(
		{ name: 'Server Count', value: [scount] },
        { name: 'Member Count', value: [mcount] },
        { name: 'Text Channel Count', value: [tcount] },
        { name: 'Voice Channel Count', value: [vcount] }
	);

    message.channel.send(embed)

}


module.exports.config = {
    name: "stats",
    description: "shows the bot's stats",
    usage: "stats",
    accessableby: "v?stats",
    aliases: []
}