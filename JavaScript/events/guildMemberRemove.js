const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = async (client, member) => {
  const guild = member.guild;
  guild.channels.cache
<<<<<<< HEAD
    .get("778391253590474802")
=======
    .get(client.config.countPlayers)
>>>>>>> Fixing bugs v3
    .setName("🎮 | Users: " + guild.memberCount);
  const canvas = Canvas.createCanvas(800, 360);
  Canvas.registerFont("./Yusei.ttf", { family: "Yusei" });
  const ctx = canvas.getContext("2d");

<<<<<<< HEAD
  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/778772645813551115/797668543058542592/fondoeazv.png"
  );
=======
  const background = await Canvas.loadImage(client.config.backgroundLeaveLink);
>>>>>>> Fixing bugs v3
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.font = "35px Yusei";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaselin = "hanging";
  ctx.fillText(`See you later ${member.user.username}`, canvas.width / 2, 295);
<<<<<<< HEAD
  ctx.fillText(
    `We are currently ${guild.memberCount} members`,
    canvas.width / 2,
    337
  );
=======
  ctx.fillText(`We are currently ${guild.memberCount} members`, canvas.width / 2, 337);
>>>>>>> Fixing bugs v3
  const y = 70,
    radio = 85,
    x = canvas.width / 2 - radio;
  ctx.beginPath();
  ctx.arc(x + radio, y + radio, radio + 5, 0, Math.PI * 2, true);
<<<<<<< HEAD
  ctx.fillStyle = "#000000";
=======
  ctx.fillStyle = client.config.circleImageLeave;
>>>>>>> Fixing bugs v3
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.save();
  ctx.beginPath();
  ctx.arc(x + radio, y + radio, radio, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(
    await Canvas.loadImage(
      member.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" })
<<<<<<< HEAD
    ),
    x,
    y,
    radio * 2,
    radio * 2
  );
  const attach = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "eazv-dev.gif"
  );

  let logEmbed = new Discord.MessageEmbed()
=======
    ), x, y, radio * 2, radio * 2);
    
  const attach = new Discord.MessageAttachment(canvas.toBuffer(), "leave.gif");

  const logEmbed = new Discord.MessageEmbed()
>>>>>>> Fixing bugs v3
    .setAuthor(`${member.user.tag}`)
    .setDescription(`📕 <@${member.user.id}> **has left the server**`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`ID: ${member.user.id}`)
    .setTimestamp()
    .setColor("RED");

  client.channels.cache.get(client.config.logChannel).send(logEmbed);
<<<<<<< HEAD
  client.channels.cache.get("CHANNEL ID REMOVE").send(attach);
=======
  client.channels.cache.get(client.config.leaveChannel).send(attach);
>>>>>>> Fixing bugs v3
};
