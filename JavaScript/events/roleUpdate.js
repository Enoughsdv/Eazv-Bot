const Discord = require("discord.js");

module.exports = async (client, oldRole, newRole) => {
  if (oldRole.name !== newRole.name) {
<<<<<<< HEAD
    let logEmbed = new Discord.MessageEmbed()
=======
    const logEmbed = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
      .setTitle("Logs Role Update")
      .addField("Old Name:", oldRole.name)
      .addField("Name Role:", newRole.name)
      .setColor(newRole.color || oldRole.name)
      .setFooter(oldRole.guild.name, oldRole.guild.iconURL())
      .setTimestamp()
      .setColor("YELLOW");
    client.channels.cache.get(client.config.logChannel).send(logEmbed);
  }
};
