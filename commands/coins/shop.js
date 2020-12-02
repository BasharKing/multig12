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

        

    },
};