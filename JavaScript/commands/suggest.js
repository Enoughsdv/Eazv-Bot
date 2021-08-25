const Discord = require("discord.js");

module.exports = async (client, message, args) => {
<<<<<<< HEAD
  let contentSuggest = args.join(" ");
  let sendChannel = client.channels.cache.get(client.config.suggestChannel);
=======
  const contentSuggest = args.join(" ");
  const sendChannel = client.channels.cache.get(client.config.suggestChannel);
>>>>>>> Fixing bugs v3

  if (!contentSuggest)
    return message.channel.send(`Invalid args.`).then((msg) => msg.delete(10));

  if (!sendChannel) return message.channel.send("Error...");
  message.channel.send("Suggestion sent successfully.");

<<<<<<< HEAD
  let embedSuggest = new Discord.MessageEmbed()
=======
  const embedSuggest = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
    .setFooter("User ID: " + message.author.id, message.guild.iconURL())
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`Submitter`, `${message.author.tag}`)
    .addField(`Suggestion`, " " + `${contentSuggest}` + " ")
    .setColor("YELLOW");

  sendChannel.send(embedSuggest).then(async (msg) => {
    await msg.react(`<a:check:797566017705607238>`);
    await msg.react(`<a:deny:797566017668513843>`);
  });
};
