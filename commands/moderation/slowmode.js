        const Discord = require("discord.js")
        const botconfig = require("../../botsettings.json");
        
        module.exports.run = async (client, message, args) => {
            const ms = require("ms");
            
            if (message.member.hasPermission("MANAGE_CHANNELS")) {
                let time = args[0];
                if (!time) {
                    return message.reply("Please specify a valid time (make sure to not put an 's' at the end!!!). EX: 10; 50; 200");
                }
                const slowmode = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('🥳 Slowmode has been set. 🥳⚡')
                    .setDescription(`Succesfully set the slowmode to ${time} seconds.`)
                    .setTimestamp()
                    .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
                message.channel.setRateLimitPerUser(time)
                message.channel.send(slowmode)
            } else message.channel.send('Insuffiecient Permissions!')
        }
        
        
        module.exports.config = {
            name: "slowmode",
            description: "Puts a channel in slowmode.",
            usage: "slowmode",
            accessableby: "v?slowmode <time>",
            aliases: []
            }