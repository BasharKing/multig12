const Discord = require('discord.js');
const request = require('node-superfetch');
const snekfetch = require('snekfetch');

module.exports = {
	name: 'meme',
	aliases: ['memes', 'dankmemes'],
	category: "fun",
	description: 'generates a costume meme',
	usage: "",
    async execute(client, message, args) {
		try {
			const { body } = await snekfetch
				.get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
				.query({ limit: 800 });
			const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
			if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
			const randomnumber = Math.floor(Math.random() * allowed.length)
			const embed = new Discord.MessageEmbed()
			.setColor("#36393f")
			.setTitle(allowed[randomnumber].data.title)
			.setURL(allowed[randomnumber].data.url)
			.setDescription("[memes/dankmemes]")
			.setImage(allowed[randomnumber].data.url)
			.setFooter("Memes Community | " + message.author.tag, message.author.displayAvatarURL())
			message.channel.send(embed)
		} catch (err) {
			return console.log(err);

    }
  },
};
