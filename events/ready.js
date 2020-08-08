const Discord = require("discord.js")
const mongo = require("../util/mongoose");
const profileSchema = require("../schemas/profile-schema");
mongo();


module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("v?help for help!", {type: "PLAYING"});
}