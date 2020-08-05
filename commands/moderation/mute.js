const Discord = require("discord.js")
const botconfig = require("../../botsettings.json");

module.exports.run = async (client, message, args) => {
    const ms = require("ms");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {


        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let role = message.guild.roles.cache.find(role => role.name === "muted" || role.name === "Muted");

        if (args[0] === 0) return message.reply('Please mention a user!')
        if (!person) return message.reply("I CANT FIND THE USER " + person)
        if (!role) return message.reply("I couldn't find the role named muted. I am creating one now! Feel free to change the permissions :). Please rerun the command now.").then(() =>
            message.guild.roles.create({
                data: {
                    name: 'muted',
                    color: 'GREY',
                    permissions: []
                },
                reason: 'mute',
            }));



            client.channels.cache.forEach( channel => {
                channel.updateOverwrite(role, { 
                    SEND_MESSAGES: false 
                });
            } )
        



        let time = args[1];
        if (!time) {
            return message.reply("You didnt specify a time!");
        }


        person.roles.add(role.id);



        message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)


        setTimeout(function () {

            person.roles.remove(role.id);
            message.channel.send(`@${person.user.tag} has been unmuted.`)
        }, ms(time));
    } else {
        message.reply("Insufficient Permissions!");

    }
}


module.exports.config = {
    name: "mute",
    description: "mutes members",
    usage: "mute",
    accessableby: "v?mute <user>",
    aliases: []
}