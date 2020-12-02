const Discord = require("discord.js");
const mongoose = require("mongoose");
const mongoPath = "mongodb+srv://multig:L3j26ySPbqQgfjKd@cluster0.bhj3c.mongodb.net/multigdb?retryWrites=true&w=majority"
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    name: "shop",
    aliases: ["store"],
    description: "List of item to be sold using coins",
    execute(client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setAuthor("Items Shop | MG Shop", message.guild.iconURL({ dynamic: true }))
        .setColor("#36393f")
        .addField("Private Room:", "**Cost:** 100 Coins", true)
        .addField("Private Room w/Special Role:", "**Cost:** 350 Coins", true)
        .addField("Special Role:", "**Cost:** 250 Coins", true)
        .addField("Create Gang:", "**Cost:** 300 Coins", true)
        .addField("Music Bot | Soon:", "**Cost:** Not specified", true)
        .addField("Note:", "All items is for 1month/ You can renew it by talking to **.bashaàrI ⚘#7069**")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }));

        message.channel.send(embed);
        

    },
};