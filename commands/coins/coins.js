const Discord = require("discord.js");
const mongoose = require("mongoose");
const mongoPath = "mongodb+srv://multig:L3j26ySPbqQgfjKd@cluster0.bhj3c.mongodb.net/multigdb?retryWrites=true&w=majority"
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    name: "coins",
    aliases: ["money", "balance"],
    description: "to know how much you have coins",
    execute(client, message, args) {
        
        const Money = require("../../models/money");

        Money.findOne({
            userID: message.author.id, 
            serverID: message.guild.id
          }, (err, money) => {
            if(err) console.log(err);

            if(!money) {
                return message.channel.send(`💳 | **${message.author.username}, your coins balance is \`0\`.**`);
            } else {
                    return message.channel.send(`💳 | **${message.author.username}, your coins balance is \`${money.money}\`.**`);
            }
        });
    }
}
