const economy = require("../../util/economy");

module.exports.run = async (message, args) => {
  const mention = message.mentions.users.first();

  if (!mention) {
    message.reply("Please tag a user to add coins to.");
    return;
  }

  const coins = args[1];
  if (isNaN(coins)) {
    message.reply("Please provide a valid numnber of coins.");
    return;
  }

  const guildId = message.guild.id;
  const userId = mention.id;

  const newCoins = await economy.addCoins(guildId, userId, coins);

  message.reply(
    `You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coin(s)!`
  );
};

module.exports.config = {
  name: "addbal",
  description: "Adds to a user's balance.",
  usage: "addbal",
  accessableby: "v?addbal <user>",
  aliases: ["baladd", "addcoins", "coinsadd" ],
};