const Discord = require("discord.js");

module.exports = async (client, message, args) => {
<<<<<<< HEAD
  let sChannel = message.mentions.channels.first() || message.channel;
  let msg = client.snipes.get(sChannel.id);

  if (!msg) return message.channel.send("No message has been deleted recently");

  let snipeEmbed = new Discord.MessageEmbed()
=======
  const sChannel = message.mentions.channels.first() || message.channel;
  const msg = client.snipes.get(sChannel.id);

  if (!msg) return message.channel.send("No message has been deleted recently");

  const snipeEmbed = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
    .setTitle("Snipe")
    .setColor("RANDOM")
    .addField("Written Message:", msg.content)
    .addField("By:", `${msg.delete.tag}`)
    .addField("Channel", `<#${msg.canal.id}>`)
    .setTimestamp();

  message.channel.send(snipeEmbed);
};
