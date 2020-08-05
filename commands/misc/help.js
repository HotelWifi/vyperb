const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Standard Commands List - Click Here To Vote For Us!')
        .setURL('https://top.gg"')
        .setAuthor(client.user.displayAvatarURL)
        .setDescription('Use ``v?help [command]`` to get more info on a command! Example ``v?help cf``')
        .setFooter('text": "To see moderator commands, type v?mhelp!')


        channel.send(exampleEmbed);
}


module.exports.config = {
    name: "help",
    description: "opens the help menu",
    usage: "chelp",
    accessableby: "v?help",
    aliases: []
}