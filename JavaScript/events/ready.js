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
    .get(client.config.guildID)
    .channels.cache.get(client.config.countPlayers)
    .setName("🎮 | Users: " + client.guilds.cache.get(client.config.guildID).memberCount);
};
