module.exports = (client, message) => {
<<<<<<< HEAD
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
=======
  const RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
>>>>>>> Fixing bugs v3

  if (!message.content.startsWith(client.config.prefix)) return;
  if (message.author.bot) return;

  if (message.content.match(RegMention)) {
    message.delete();
    message.channel.send("My prefix is ``"+client.config.prefix+"``").then((msg) => {
      msg.delete({ timeout: 4000 });
    });
  }

  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

<<<<<<< HEAD
  let cmd = client.commands.get(command);
=======
  const cmd = client.commands.get(command);
>>>>>>> Fixing bugs v3
  if (!cmd) return;

  cmd(client, message, args);
};
