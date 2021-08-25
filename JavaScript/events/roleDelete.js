const Discord = require("discord.js");

module.exports = async (client, role) => {
<<<<<<< HEAD
  let logEmbed = new Discord.MessageEmbed()
=======
  const logEmbed = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
    .setTitle("Logs Role Delete")
    .addField("Role Deleted:", role)
    .setColor("YELLOW")
    .setFooter(role.guild.name, role.guild.iconURL())
    .setTimestamp();

  client.channels.cache.get(client.config.logChannel).send(logEmbed);
};
