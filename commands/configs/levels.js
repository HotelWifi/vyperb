const lconfigSchema = require("../../schemas/lconfig-schema");
const mongo = require('../../util/mongoose')
const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    const tf = args[0]

    if (tf === 'true' || tf === 'false') {
        const { guild } = message
        await mongo().then(async mongoose => {
            try {
                await lconfigSchema({ _id: guild.id }, { _id: guild.id, lconfig: tf === 'true' }, { upsert: true })
            } finally {
                message.reply('s')
                mongoose.connection.close()
            }
        })

    }

    else (message.channel.send('Please enter a valid boolean status. Example: ``v?lconfig true`` or ``v?lconfig false``.'))

};

module.exports.config = {
    name: "lconfig",
    description: "Changes the levels configuration.",
    usage: "lconfig",
    accessableby: "v?lconfig <true/false>",
    aliases: [""],
};