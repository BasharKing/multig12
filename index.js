require('dotenv').config();
const Discord = require("discord.js");
const { Client, Util, Collection, Structures } = require("discord.js");
const client = new Client({ disableMentions: "everyone" }, { partial: ["MESSAGE", "REACTION"] });

const fs = require("fs");
const { readdirSync } = require("fs");
const path = require("path");
const { join } = require("path")
const moment = require("moment");
const pretty = require("pretty-ms");
const prefix = "$";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/money", {
    useNewUrlParser: true
});
const Money = require("./models/money");

client.queue = new Map();
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity("MultiG Society", { type: "WATCHING" });
});

client.commands = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
const cooldowns = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {

if(message.author.bot) return;
if(message.channel.type === "dm") return;

const mentionRegex = RegExp(`^<@!${client.user.id}>$`);
if(message.content.match(mentionRegex)) message.channel.send("Boop!").then(msg => {
      msg.edit(`Beep boop!\n**My default prefix: \`${prefix}\` - support: \`https://discord.gg/h4F6h8k\`\nwebsite: \`https://arzonabot.xyz\`**`);
});

if(message.content.indexOf(prefix) !== 0) return;


const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName) ||
client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return;

if (command.args && !args.length) {
let reply = `> You didn't provide any arguments, ${message.author}!`;

if (command.usage) {
reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
}

return message.channel.send(reply);
}

if (command.guildOnly && message.channel.type !== 'text') {
return message.channel.send("> I can't run commands in DMS!");
}

if (!cooldowns.has(command.name)) {
cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (!timestamps.has(message.author.id)) {
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}
else {
const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

if (now < expirationTime) {
const timeLeft = (expirationTime - now) / 1000;

return (await message.channel.send(`> **${message.author.username}**, Cooldown (wait **${timeLeft.toFixed(1)}**)`).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' })));
}



timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}
try {
console.log(command.name);
command.execute(client, message, args);
}
catch (error) {
console.error(error);
message.reply('there was an error trying to execute the command!');


    }
});

client.on("message", message => {

if(message.author.bot) return;
let coinstoadd = Math.ceil(Math.random() * 50);
console.log(coinstoadd + "Coins");
Money.findOne({
    userID: message.author.id,
    serverID: message.guild.id
  },  (err, money) => {
        if(err) console.log(err);
        if(!money) {
            const newMoney = new Money({
                userID: message.author.id,
                serverID: message.guild.id,
                money: coinstoadd
            })

            newMoney.save().catch(err => console.log(err));
        } else {
            money.money = money.money + coinstoadd
            money.save().catch(err => console.log(err));
        }
    })
});