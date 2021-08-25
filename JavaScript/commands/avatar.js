const Discord = require("discord.js");

module.exports = async (client, message, args) => {
<<<<<<< HEAD
  let member = message.mentions.users.first() || message.author;
=======
  const member = message.mentions.users.first() || message.author;
>>>>>>> Fixing bugs v3
  const embed = new Discord.MessageEmbed()

    .setAuthor("Avatar to " + member.username)
    .setImage(`${member.displayAvatarURL({ size: 2048, dynamic: true })}`)
    .setColor("BLUE");

  message.channel.send(embed);
};
