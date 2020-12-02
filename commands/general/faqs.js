const Discord = require("discord.js");

module.exports = {
    name: "faqs",
    aliases: ["question", "fact"],
    description: "answers about most questions",
    execute(client, message, args) {

        const forum = "https://multigaming.me/forum/";
        const embed = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setAuthor("📰 Common Questions:")
        .addField("A. ماهي فروع سيرفرات ملتي قيمنق الرسمية؟", `TeamSpeak: M-G / GangWar (MTA): 46.105.38.65:22003 / Forum: [Fourm](${forum})`)
        .addField("B. كيف يمكنني ان اصبح ادارة في الديسكورد؟", `By helping members in <#765274336939606016> / بمساعدة الاعضاء في روم السبورت `)
        .addField("C. كيف يمكنني التبليغ عن مشكلة في السيرفر؟", `By contact with admin in private / بمكالمة الادمن في الخاص`)
        .addField("D. كيف يمكنني فتح عصابة؟", `By taking all the map in server / بقيامك انت واعضائك باخذ ماب الاحتلال كاملًا`)
        .addField("E. كيف يمكنني فتح روم صوتي خاص؟", `By collection coins / بتجميعك للكوينز عن طريق الكوينز - قريبًا النظام الكامل`)
        .addField("#. الاسئلة", `We will edit every 1w / الاسئلة تعدل كل اسبوع بشكل متكرر لضمان فهم العضو`)
        .setTimestamp()
        .setFooter(message.guild, message.guild.iconURL({ dynamic: true }));

        message.channel.send(embed);

    },
};
