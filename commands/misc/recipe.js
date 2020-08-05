const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const axios = require('axios');

module.exports.run = async (client, message, args) => {
    axios({
        method: 'get',
        url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyB7NGV8oC6zPCDRO_wwy9s31FO0IBemHlE&cx=011934660464717948299:jt6oyr7jaii&q=${args.join('+')}`,
    }).then(function (res) {
        message.channel.send({
            embed:
                new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Here are the top 3 results!')
                    .setDescription(`1. [${res.data.items[0].title}](${res.data.items[0].link})\n2. [${res.data.items[1].title}](${res.data.items[1].link})\n3. [${res.data.items[2].title}](${res.data.items[2].link})`),
        });
    })
};

module.exports.config = {
    name: "recipe",
    description: "gives top 3 recipes",
    usage: "recipe",
    accessableby: "v?recipe <foodName>",
    aliases: []
    }