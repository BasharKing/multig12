const Discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    async execute(client, message, args) {

        let embed = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(`Commands list; Soon more commands!\nNote: this system is beta.`)
        .addField("General:", "`help`, `imdb`, `instagram`, `memes`, `ping`, `coins`, `leaderboard`")
        .addField("Moderation:", "`addemoji`, `Soon`, `soon`")
        .setTimestamp()
        .setFooter(client.user.username, client.user.avatarURL());

        message.channel.send(embed);

    },
};