const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message, args) => {

    randomPuppy()
        .then(url => {
            message.channel.send(url);
        })
}

module.exports.config = {
    name: "dog",
    description: "Displays a random doggo from the interweb.",
    usage: "dog",
    accessableby: "v?dog",
    aliases: []
}