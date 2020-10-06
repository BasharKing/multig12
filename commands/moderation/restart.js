const Discord = require("discord.js");

module.exports = {
    name: "restart",
    aliases: ["refresh"],
    description: "to restart bot for any changes",
    async execute(client, message, args) {

    message.channel.send("Restarting bot. :761254206643634206:").then(m => {
    client.destroy().then(() => {
    client.login(process.env.TOKEN);
      }
    }
  },
};   
