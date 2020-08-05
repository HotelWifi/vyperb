const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const genius = require('genius-lyrics')
module.exports.run = async (client, message, args) => {

    const G = new genius.Client('XqjpJuRSLOyNNSt73njbXopiO4oH7Jolee4RZySVscK_nVIugar3j1W-byW42v6e')
    message.channel.startTyping();
    G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
    .then(results => {
 const song = results[0]
 message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`).then(() => message.channel.stopTyping()); //song.lyrics
 })
     .catch(err => message.reply(err))

}
    module.exports.config = {
    name: "lyrics",
    description: "shows lyrics",
    usage: "lyrics",
    accessableby: "v?lyrics <song name>",
    aliases: []
}