const Discord = require("discord.js");
module.exports = {
    name: "ping",
    aliases: "latency",
    description: "to know latency of the bot",
    execute(client, message, args) {
        
          message.channel.send("Ping! 🔴").then(m => {
              m.edit(`Pong! **${client.ws.ping}ms**`);
          });
    },
};