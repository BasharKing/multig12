const Discord = require("discord.js");

module.exports = {
    name: "restart",
    aliases: ["refresh"],
    description: "To restart bot.",
    async execute(client, message, args) {

        if(message.author.id !== "626086040599396391") {
            return message.channel.send("You can't use thie command.");
        }

        await message.channel.send(`Restarting bot...`);
        process.exit();
    },
};