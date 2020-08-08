const mongo = require("./mongoose");
const profileSchema = require("../schemas/profile-schema");
const Discord = require("discord.js")
mongo();
const LevelCache = {};

module.exports = (bot) => {
    bot.on('message', (message) => {
        if(message.author.bot || message.channel.type === "dm") return;
        const { guild, member } = message

        addXP(guild.id, member.id, 23, message)
    })
}

const getNeededXP = (level) => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
    try {
        const result = await profileSchema.findOneAndUpdate(
            {
                guildId,
                userId,
            },
            {
                guildId,
                userId,
                $inc: {
                    xp: xpToAdd,
                },
            },
            {
                upsert: true,
                new: true,
            }
        )
        let { xp, level } = result
        const needed = getNeededXP(level)

        if (xp >= needed) {
            ++level
            xp -= needed
            
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🥳 You have leveled up! 🥳')
            .addFields(
                { name: '``Your new Level:``', value: `${level}` },
                { name: '``Remainder XP:``', value: `${xp}` },
                { name: '``XP needed to level up:``', value: `${getNeededXP(
                    level
                )}` },
            )
            .setTimestamp()
            .setFooter('Made by HotelWifi#1056', 'https://images-ext-2.discordapp.net/external/qeQtVcGyMUgDoROFr7lcLqGwtLXUgZU4W1gopGJbk7E/https/media.discordapp.net/attachments/736832388935450766/740459124386693140/ezgif.com-webp-to-jpg.jpg');
            message.reply(embed)

            await profileSchema.updateOne(
                {
                    guildId,
                    userId,
                },
                {
                    level,
                    xp,
                }
            )
        }
    } finally { }
}

module.exports.getLevels = async (guildId, userId) => {
    const cachedValue = LevelCache[`${guildId}-${userId}`];
    if (cachedValue) {
      return cachedValue;
    }
        try {
      
          const result = await profileSchema.findOne({
            guildId,
            userId,
          });
      
      
          let level = 0;
          if (result) {
            level = result.level;
          } else {
            await new profileSchema({
              guildId,
              userId,
              level,
            }).save();
          }
      
          LevelCache[`${guildId}-${userId}`] = level;
      
          return level;
         } finally { }
        }
module.exports.addXP = addXP