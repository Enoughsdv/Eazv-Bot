module.exports = (client) => {
  const states = ["Eazv Development", "Supporting", "github.com/Enoughsdv"];

  setInterval(() => {
    let index = states[Math.floor(states.length * Math.random())];

    client.user.setPresence({
      status: "dnd",
      activity: {
        name: index,
        type: "WATCHING",
      },
    });
  }, 10000);

  client.guilds.cache
<<<<<<< HEAD
    .get("GUILD ID")
    .channels.cache.get("CHANNEL ID")
    .setName(
      "🎮 | Users: " + client.guilds.cache.get("GUILD ID").memberCount
    );
=======
    .get(client.config.guildID)
    .channels.cache.get(client.config.countPlayers)
    .setName("🎮 | Users: " + client.guilds.cache.get(client.config.guildID).memberCount);
>>>>>>> Fixing bugs v3
};
