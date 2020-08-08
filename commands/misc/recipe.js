const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const axios = require('axios');

module.exports.run = async (client, message, args) => {
    const first = args[0];
    if (!first) {
        message.channel.send('Please say something that you would like me to search for! EX: "v?recipe brownies".')
    }
    axios({
        method: 'get',
        url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyB7NGV8oC6zPCDRO_wwy9s31FO0IBemHlE&cx=011934660464717948299:jt6oyr7jaii&q=${args.join('+')}`,
    }).then(function (res) {
        message.channel.send({
            embed:
                new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Here are the top 3 results!')
                    .setDescription(`1. [${res.data.items[0].title}](${res.data.items[0].link})\n2. [${res.data.items[1].title}](${res.data.items[1].link})\n3. [${res.data.items[2].title}](${res.data.items[2].link})`)
                    .setTimestamp()
                    .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg'),
        })
    })
};

module.exports.config = {
    name: "recipe",
    description: "Gives top 3 recipes.",
    usage: "recipe",
    accessableby: "v?recipe <foodName>",
    aliases: []
}
