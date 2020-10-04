const Discord = require("discord.js");
module.exports = {
    name: "addemoji",
    aliases: ["addemote"],
    description: "to add an emoji to the server.",
    usage: "[ID]",
    execute(client, message, args) {

        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("**You don't have required permission: **MANAGE_EMOJIS**");
        if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send("**I don't have required permission: **MANAGE_EMOJIS**");
    
        if(!args) return message.channel.send(`**${message.author.username}** Please type emoji id to add.`);
        if(args[0].length < 18 || args[0].length > 18) return message.channel.send(`**${message.author.username}** that emoji could not be found.`);

        message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${args[0]}`, `${args[0]}`).catch(mstry => {
            return message.channel.send(`**${message.author.username}** that emoji could not be found.`);
        });
        message.channel.send(`**${message.author.username}** the emoji has been added.\n**${args[0]}**`);

    },
};