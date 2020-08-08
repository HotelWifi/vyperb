const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message, args) => {

    let reddit = [
        "meme",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "funny",
        "PewdiepieSubmissions",
        "memes",
        "raimimemes",
        "comedyheaven",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
        await message.channel.send(new Discord.MessageEmbed()
            .setTitle('Here is your freshly picked meme!')
            .setImage(url)
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg')).then(() => message.channel.stopTyping());
}).catch (err => console.error(err));

}

module.exports.config = {
    name: "meme",
    description: "Displays a meme from reddit.",
    usage: "meme",
    accessableby: "v?meme",
    aliases: []
}