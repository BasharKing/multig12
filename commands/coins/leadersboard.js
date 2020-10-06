const Discord = require("discord.js");
const mongoose = require("mongoose");
const mongoPath = "mongodb+srv://multig:L3j26ySPbqQgfjKd@cluster0.bhj3c.mongodb.net/multigdb?retryWrites=true&w=majority"
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = {
    name: "leaderboard",
    aliases: ["ranks", "leaders", "leader"],
    description: "to know the highest users who have coins.",
    execute(client, message, args) {
        const Money = require("../../models/money");

        Money.find({
            serverID: message.guild.id
          }).sort([
            ['money', 'descending']
          ]).exec((err, res) => {
            if (err) console.log(err);
        
            let embed = new Discord.MessageEmbed()
              .setAuthor("📋 Coins Leaderboard", message.guild.iconURL())
              .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
              .setTimestamp()
            //if there are no results
            if (res.length === 0) {
              embed.setColor("RED");
              embed.addField("No data found", "Please type in chat to gain coins!")
            } else if (res.length < 10) {
              //less than 10 results
              embed.setColor("BLURPLE");
              for (i = 0; i < res.length; i++) {
                let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                if (member === "User Left") {
                  embed.addField("Top Coins:", `#${i + 1} | **${member}** Coins: **${res[i].money}**`);
                } else {
                  embed.addField(`Top Coins:`, `#${i + 1} | **${member.user.username}** Coins: **${res[i].money}**`);
                }
              }
            } else {
              //more than 10 results
              embed.setColor("BLURPLE");
              for (i = 0; i < 10; i++) {
                let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                if (member === "User Left") {
                  embed.addField("Top Coins:", `#${i + 1} | **${member}** Coins: **${res[i].money}**`);
                } else {
                  embed.addField(`Top Coins:`, `#${i + 1} | **${member.user.username}** Coins: **${res[i].money}**`);
                }
              }
            }
        
            message.channel.send(embed);
          })
        }
    }
