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
        "okbuddyretard",
        "comedyheaven",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
        await message.channel.send({
            files: [{
                attachment: url,
                name: 'meme.png'
            }]
        }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

}

module.exports.config = {
    name: "meme",
    description: "shows a meme",
    usage: "meme",
    accessableby: "v?meme",
    aliases: []
}