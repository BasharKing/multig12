/* const Discord = require("discord.js");
const mongoose = require("mongoose");
const mongoPath = "mongodb+srv://multig:L3j26ySPbqQgfjKd@cluster0.bhj3c.mongodb.net/multigdb?retryWrites=true&w=majority"
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    name: "remove",
    description: "To remove a number of coins from the user",
    execute(client, message, args) {

        if(message.author.id = "626086040599396391") {
            return message.channel.send("You must be owner of bot to do this command.");
        }

        const Money = require("../../models/money");
        const member = message.mentions.members.first() || message.member;

        const memberProfile = Money.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, money) => {
            if(err) message.channel.send(err);
        });

        if(!memberProfile) return message.channel.send("I can't find that user.");

        if(!args[1]) return message.channel.send("You need to select amount of coins to remove.");

        if(isNaN(args[1]) || args[1] < 0) return message.channel.send("You need a number above 0 to remove.");

        const oldBal = Money.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, money) => {
            if(err) message.channel.send(err);
        });

        if(!oldBal - args[1] < 0) return message.channel.send("I can't remove this much from that user.");

        memberProfile.remove
    },
}; */