const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "fun",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    async execute(client, message, args) {
        const name = args.join(" ");

        if (!name) {
            return message.channel.send(`**${message.author.username}** Please input a user to search about it. 🔍`);
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send(`**${message.author.username}** I can't find that user.`);
        }

        try {

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("#36393f")
            .setTitle(`${account.full_name}`)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile Info", stripIndents`**User:** ${account.username} 
            **Fullname:** ${account.full_name}
            **Posts:** ${account.edge_owner_to_timeline_media.count}
            **Followers:** ${account.edge_followed_by.count}
            **Following:** ${account.edge_follow.count}
            **Bio:** ${account.biography.length == 0 ? "No bio." : account.biography}`);

        message.channel.send(embed);
        } catch(ex) {
             message.channel.send(`I can't find that user.`);
        }
    },
};