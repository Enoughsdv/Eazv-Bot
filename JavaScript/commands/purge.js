const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Insufficient permissions");

  if (!args[0]) {
<<<<<<< HEAD
    let noN = new Discord.MessageEmbed()
=======
    const noN = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
      .setDescription("Set an amount less than ``100`` and greater than ``0``.")
      .setColor("RED");
    return message.channel.send(noN);
  }

<<<<<<< HEAD
  let number = args[0];
=======
  const number = args[0];
>>>>>>> Fixing bugs v3
  if (isNaN(number))
    return message.channel.send("You need to enter numbers, not letters or symbols.");

  number = parseInt(number);

  if (number >= 100 || number <= 0)
    return message.channel.send("The value is not correct.");

  message.channel
    .bulkDelete(number + 1)
    .then(() => {})
    .catch((error) => {
<<<<<<< HEAD
      let errorEmbed = new Discord.MessageEmbed()
=======
      const errorEmbed = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
        .setDescription(`${error.message}`)
        .setFooter("Eazv Development")
        .setColor("RED");
      message.channel.send(errorEmbed);
    });
};
