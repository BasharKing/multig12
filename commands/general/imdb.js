const Discord = require("discord.js");
const imdb = require("imdb-api")

module.exports = {
    name: "imdb",
    aliases: ["search-movie", "search-series", "movies"],
    description: "to know information about movie or series",
    cooldown: 5,
    usage: "[movie | series]",
    async execute(client, message, args) {

        const imob = new imdb.Client({ apiKey: "5e36f0db" });

        if(!args.length) {
                return message.channel.send(`**${message.author.username}** Please provide a movie or series name.`);
        }

        let movie = await imob.get({ "name": args.join(" ") });

        let embed = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle(`Movie: ${movie.title}`)
        .setURL(movie.imdburl)
        .setImage(movie.poster)
        .setDescription(movie.plot)
        .addFields(
            { name: "Actors", value: movie.actors, inline: true },
            { name: "Released", value: movie.released, inline: true },
            { name: "Votes", value: movie.votes, inline: true },
            { name: "Country", value: movie.country, inline: true },
            { name: "Type", value: movie.type, inline: true }
        )
        .setTimestamp()
        .setFooter(`🌟 Ratings: ${movie.rating}`);
        
        message.channel.send(embed);

    },
};