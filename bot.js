const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong!');
      }
});

client.on('message', msg => {
  if (msg.content === '%ownerbot') {
    msg.reply('**OwnerBot <@385103221804236800>**');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**و عليكم السلام**');
  }
});

client.on('message', msg => {
  if (msg.content === 'hla') {
    msg.reply('**Hla Fek :heartpulse: **');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('**هلا فيك :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'brb') {
    msg.reply('**tyt :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'Brb') {
    msg.reply('**Tyt :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'BRB') {
    msg.reply('**Tyt :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**Tyt :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'back') {
    msg.reply('**Welcome Back :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**Welcome Back :heartpulse:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('**و عليكم السلام**');
  }
});

  const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `cats`)) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
  

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **ارسل اسم روم الي تريد فيه الجيف اواي**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **انا لقيت الروم :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **وقت الجيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **الشئ الي عليه الجيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **To Enter The Give Away Press** :tada:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **ما عندي برمشن الكافية لصنع الجيف اواي**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on('message', msg => {
        if (msg.content.startsWith(`%warn`)) {
          if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
           let args = msg.content.split(" ").slice(1);
          if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
          if (!args[1]) return msg.reply('``اكتب السبب``')

          if (msg.guild.channels.find('name', 'warns')) {

            msg.guild.channels.find('name', 'warns').send(`
          تم اعطائك تنبيه : ${msg.mentions.members.first()}
          لأنك قمت بما يلي
          ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
          `)
          }
        }
})


  client.on('message', async ReBeLL => {
if(ReBeLL.author.bot) return;
if (ReBeLL.channel.guild) {
if (ReBeLL.content.startsWith(prefix + `8ball`)) {
    let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
    let authorReBeL = ReBeLL.author.username;

    // https://en.wikipedia.org/wiki/Magic_8-Ball
    let ReBeL = [

"هذا مؤكد.",
        "إنه بالتأكيد كذلك" ,
        "بدون أدنى شك.",
        "نعم بالتأكيد.",
        "يمكنك الاعتماد عليه.",
        "كما أرى أنه نعم.",
        "على الأرجح.",
        "توقعات جيدة.",
        "نعم فعلا.",
        "وتشير الدلائل إلى نعم.",


        "الرد المحاولة مرة أخرى ضبابية.",
        "اسأل مرة اخرى لاحقا.",
        "الأفضل أن لا أقول لكم الآن.",
        "لا يمكن التنبؤ الآن.",
        "التركيز والمحاولة مرة أخرى." ,


        "لا تعتمد على." ,
        "ردي هو لا.",
        "وتقول مصادري لا.",
        "أوتلوك ليس جيد بما فيه الكفاية.",
        "مشكوك فيه جدا."
    ]
    let randomReBeL = Math.floor(Math.random() * ReBeL.length);

    if (!argsReBeL) return ReBeLL.reply("ask him something.");
    ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
}}});
  

  client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});



client.on('message', message => {
    if(message.content.includes('discord.gg','.com','.net','.tv','.io','https://','http://')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});

        client.on('message', async message => {
            if(message.content.includes('discord.gg','.com','.net','https://','http://','.io','.tv')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "RANDOM",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
.setDescription(`**  🔒 لقد تمت معاقبتك  **
**  بسبب نشر الروابط خيو 😏 🐸 **
`)
            .setColor("RANDOM")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)


    }
})

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  });


client.on("message", message => {
 if (message.content === "%help-Admin") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('[❖═════اومر ادمن═══════❖]')
	  .addField('%bc', `لخاصية البرودكستات`)
	  .addField('%kick', `لخاصية طرد`)
	  .addField('%ban', `عشان تعطي احد حظر من سيرفر للابد`)
             .addField('%tempban', `عشان تعطي احد حظر من السيرفر بمدة`)
	  .addField('%unban', `لفك الحظر من احد`)
	  .addField('%bans', `عشان تشوف عدد المبندين في السيرفر`)
	  .addField('%clear', `لخاصية حذف شات `)
          .addField('%mute', `لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ للابد `)
         .addField('%tempmute', `لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ لمدة محددة `)
          .addField('%unmute', `لفك الميوت عن شخص `)
          .addField('%untempmute', `لفك الميوت عن شخص `)
          .addField('%report', `عشان تبلغ عن شخص`)
	  .addField('%warn', `عشان تعطي احد انظار و لكي يشتغل الامر سوي روم اسمه warns`)
          .addField('%Autorole toggle', `عشان تفعل الautorole`)
          .addField('%Autorole set', `عشان تحط الرتبة الي اول ما احد يدخل ياخذها`)
           .addField('%info', `عشان تشوف الرتبة الموضوعة في الAutorole`)
           .addField('%mutechannel', `عشان تخلي ما فيه احد يقدر يكتب في الروم المحدد`)
           .addField('%unmutechannel', `عشان ترجع الناس تقدر تكتب في الروم الي كتمته`)
	  .addField('%embed', `البوت يكرر الكلام الي انت تقوله بامبد`)
	  .addField('%say', `البوت يكرر الكلام الي انت تقوله بدون امبد`)
	  .addField('%giveaway', `عشان تصنع جيف اواي`)
      .setFooter('======================================================')
      .setFooter('[❖═════اومر ادمن═══════❖]')
  message.channel.send(`:white_check_mark: | Check Your DM`)
  message.author.send({embed});
 }
});


client.on("message", message => {
 if (message.content === "%help-Public") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
           .setFooter('[❖═════اومر الاعضاء═══════❖]')
          .addField('%invite', `لاضافة البوت الى سيرفرك`)
	  .addField('%roles', `لمعرفة الرتب الي في السيرفر`)
          .addField('%avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
	  .addField('%server', `يجبلك معلومات السيرفر`)
	  .addField('%id', `يجبلك الملف الشخصي حقك`)
	  .addField('%servers', `يجبلك عدد السيرفرات التي البوت داخله`)
	  .addField('%ping', `يقلك كم بنق البوت`)
          .addField('%support', `سيرفر الدعم حق البوت`)
	  .addField('%image', `يعرض صورة سيرفر`)
	  .addField('%members', `حاله الاعضاء`)
          .addField('%credits', `عشان تشوف الكردتس الخاصة بك`)
          .addField('%daily', `عشان تاخذ الكردتس اليومية الخاصة بك`)
          .addField('%trans', `عشان تعطي لاحد مبلغ من الكردتس الخاصة بك`)
          .addField('%cal', `لاستخدام الالة الحاسبة + للجمع - للطرح * للضرب / للقسمة`)
          .addField('%owner', `لارسال رسالة لاونر سيرفر`)
          .addField('%suggest', `لاقتراح شئ و لازم يكون فيه روم اسمه suggestions `)
          .addField('%uptime', `عشان تشوف البوت شغال من متى`)
          .addField('%botinfo', `عشان تعرف معلومات البوت`)
          .addField('%createcolors', `عشان تصنع  69 لون مختلفين`)
          .addField('%deletecolors', `عشان تحذف ال69 لون كلهم`)
          .addField('%colors', `عشان تظهر قائمة الالوان`)
          .addField('%color', `عشان تاخذ اللون`)
          .addField('%contact', `لارسال رسالة لصاحب البوت`)
	  .addField('%cats', `يجيب لك صور قطط`)
	  .addField('%count', `لمعرفة عدد الناس الي في سيرفر`)
      .setFooter('[❖═════اومر الاعضاء═══════❖]')
  message.channel.send(`:white_check_mark: | Check Your DM`)
  message.author.send({embed});
 }
});



client.on("message", message => {
 if (message.content === "%help-Games") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© EpicBot جميع الحقوق محفوظة 2018 لــبوت')
      .setFooter('[❖═════اومر الالعاب═══════❖]')
      .addField('%صراحة', `لعبة صراحه`)
	  .addField('%عقاب', `لعبة عقاب`)
      .addField('%خواطر', `لعبة خواطر`)
	  .addField('%حب', `لعبة الحب`)
	  .addField('%كت تويت', `لعبة كت تويت`)
	  .addField('%لو خيروك', `لعبة لو خيروك`)
          .addField('%قرعة', `لاستعمال القرعة`)
          .addField('%emoji', `للعب لعبة الايموجي`)
          .addField('%8ball', `عشان تسال 8ball`)
      .setFooter('[❖═════اومر العاب═══════❖]')
  message.channel.send(`:white_check_mark: | Check Your DM`)
  message.author.send({embed});
 }
});

  client.on('message', message => {

    if (message.content === "%count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("RANDOM")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});




  client.on('message', message => {
if(message.content.startsWith("%emoji")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slot2 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slot3 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
  


var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});


   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add " + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/api/oauth2/authorize?client_id=" + `${client.user.id}` + "&permissions=8&scope=bot")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
  message.channel.send(`:mailbox_with_mail:  | Check Your DM`)
		   message.author.send({embed})
	   }
   });




   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}support`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Join The Support Server " + `${client.user.username}` + " <<")
		   .setURL("https://discord.gg/" + `${client.user.id}` + "jECGW9N")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
  message.channel.send(`:mailbox_with_mail:  | Check Your DM`)
		   message.author.send({embed})
	   }
   });


client.on('message', message => {
       if(message.content.startsWith(`${prefix}invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite EpicBot")
           .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&permissions=8&scope=bot")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
  message.channel.send(`:mailbox_with_mail:  | هذه الرسالة غرضها لو انت مسكر خاص`)
       }
   });

client.on('message', message => {
       if(message.content.startsWith(`${prefix}support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Join The Support Of EpicBot")
	   .setURL("https://discord.gg/" + `${client.user.id}` + "jECGW9N")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
  message.channel.send(`:mailbox_with_mail:  | هذه الرسالة غرضها لو انت مسكر خاص`)
       }
   });



client.on('message', message => {
     if (message.content === "%servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "%ping") {
      const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` EpicBot
 .`, 'https://cdn.discordapp.com/attachments/445335688628666388/473879902945542144/Epic.png')

  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    if (message.content === "%roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
    var prefix = "%"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "%";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});



client.on('message', async message => {
    let args = message.content.split(" ");
    let command = args[0];

    if(command === prefix + 'tempban') {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('انت لا تملك الصلاحيات اللازمة').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**منشن عضو لطرده**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك طرد  نفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = args[2];
       if(!duration) return message.reply('**حدد وقت زمني لفك البان عن الشخص**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('لقد تبندت من سيرفر')
       .setThumbnail(mention.avatarURL)
       .addField('# - السيرفر:',message.guild.name,true)
       .addField('# - تم طردك بواسطة',message.author,true)
       .addField('# - السبب',reason)
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});

client.on('message' , message => {
    var prefix = "%";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "tempmute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "untempmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('%bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "EpicBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('%صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",

]


 client.on('message', message => {
   if (message.content.startsWith("%عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('EpicBot' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});
  const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
     '‏كت تويت | هل تفضل الافلام ولا المسلسلات ؟',
     '‏كت تويت | وش افضل قناة تتابعها في اليوتيوب ؟',
     '‏كت تويت | وش افضل لعبة ممكن تلعبها  ؟',
     '‏كت تويت | وش تتباع اكثر افلام اجنبي ام عربي ؟',
     '‏كت تويت | مو لاقي سؤال اسئله لك :joy:',
]
  client.on('message', message => {
   if (message.content.startsWith("%كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
 const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.",
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
  "**المناقشات العقيمة لا تنجب افكارا**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
]
  client.on('message', message => {
   if (message.content.startsWith("%خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL)
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
 const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]
  client.on('message', message => {
   if (message.content.startsWith("%حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('EpicBot' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





var cats = [

"https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});



 client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      .addField(":calendar: ***انت دخلت السيرفر في***", msg.member.joinedAt)
      msg.channel.send({embed:embed});
	    }
  });
   client.on("message", msg => {
           var prefix = "%";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
	    }
});
    client.on("message", message => {
    const prefix = "%"
           if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()
       .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(RANDOM)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()
    message.channel.send({embed});
      }
  });
   client.on('message', message => {
    if (message.content.startsWith("%avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
       }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
	     }
  });
   client.on('message', message => {
    if(message.content == '%members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
:blue_heart:   all:  ${message.guild.memberCount}**`)
         message.channel.send({embed});
     }
  });
   client.on('message', message => {
      if (message.content.startsWith(prefix + 'clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You Don't Have [*MANAGE_MESSAGES*] Permission `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
   const messagecount = parseInt(args.join(' '));
   message.channel.fetchMessages({
     limit: messagecount
 }).then(messages => message.channel.bulkDelete(messages));
    var embed = new Discord.RichEmbed()
        .setTitle('تم مسح الشات بنجاح :white_check_mark: ')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed)
 };
 });


 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':regional_indicator_n: :a: :m: :regional_indicator_e:  | ***الاسم*** :  ',`${member}`)
        .addField(':pencil:  | ***مرحبا بك في السيرفر***' , `***مرحبا بك في السيرفر,*** ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| ***انت العضو رقم***',`${member.guild.memberCount}`)
                   .addField("***الاسم***:",`<@` + `${member.id}` + `>`, true)
                                      .addField(' ***الـسيرفر***', `${member.guild.name}`,true)
.setImage('https://cdn.discordapp.com/attachments/445335688628666388/477469283878961160/gfd.jpg','https://cdn.discordapp.com/attachments/445335688628666388/477605580203098112/images.png','https://cdn.discordapp.com/attachments/445335688628666388/477608211197722634/images.png','https://cdn.discordapp.com/attachments/445335688628666388/477608355632775178/images.png')
      .setFooter(`${member.guild.name}`)
        .setTimestamp()
       channel.sendEmbed(embed);
    });
     client.on('guildMemberRemove', member => {
    var MoCodes = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
    .setDescription('***راح الحبيب*** '+'<@'+`${member.user.id}`+'>'+'T-T')
.setImage('https://cdn.discordapp.com/attachments/445335688628666388/477597893822382091/gd.jpg','https://cdn.discordapp.com/attachments/385163493512445962/480899764494401559/9k.png','https://cdn.discordapp.com/attachments/445335688628666388/477609046568861696/Z.png')
    .setColor('RANDOM')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : MoCodes});
});



 	const fs = require('fs');
	const moment = require('moment');
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {
   if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
         if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return;
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
 }
       });
 let ar = JSON.parse(fs.readFileSync(`./Data/AutoRole.json`, `utf8`))
 client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
 client.on('message', message => {
 if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
 if(message.content.startsWith(prefix + `autorole`)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)
   if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/setrole [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
    if(state.trim().toLowerCase() == 'toggle') {
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   }
         }
 if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`)
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()
 .addField(`Autorole : :sparkles:  `, `
 State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
     .setColor(`BLUE`)
    message.channel.send({embed})
  }
     fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });
 })
 client.on('ready', () => {
  console.log(`AutoRole Code Started By Friends Team`);
    client.user.setStatus("online")
});
   const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
 client.on('message', msg => {
if (msg.content.startsWith(prefix + 'cal')) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }
   const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}
  طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});
 client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var norElden = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('**New Message On My DM !**')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("473878057229221888").send({ embed: norElden });
    }
});

 client.on('message', message => {
    if (message.content.startsWith("%botinfo")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO  EpicBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `%` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .addField("Created on", client.user.createdAt)
                  .setFooter('By |<@385103221804236800>')
    })
}
});

  client.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400);
  let hours = Math.floor(time % 31536000 % 86400 / 3600);
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
  days = days > 9 ? days : '0' + days;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
  }
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "botinfo")) {
    let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
    let upTime = timeCon(process.uptime());
    let createdAt = moment(client.user.createdAt).fromNow();

let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Bot Creator :: ${client.users.get("385103221804236800").username}
Ping :: ${client.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${client.guilds.size}
Users :: ${client.users.size}
Channels :: ${client.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
  }
});
  
  

 client.on('message', message => {
     var prefix = "%"
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;
     let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
     while (notCompleted) {
         if (uptime >= 8.64e+7) {
             days++;
            uptime -= 8.64e+7;
         } else if (uptime >= 3.6e+6) {
             hours++;
            uptime -= 3.6e+6;
         } else if (uptime >= 60000) {
             minutes++;
            uptime -= 60000;
         } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
         }
         if (uptime < 1000)  notCompleted = false;
     }
     message.channel.send("`" + `${days} days, ${hours} hours, ${minutes} minutes , ${seconds} seconds` + "`");
 }
});
 client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
 client.on('message', message => {
 if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
            }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
            }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}
 });
 client.on('guildCreate', guild => {
  client.channels.get("473877431611031563").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("474966117190860801").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
   client.on('message', ReBeeL => {
  var prefix = "%";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "owner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** %owner <message> **")
                return;
                  }
                   var rebel = new Discord.RichEmbed()
                      .setColor("RANDOM")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك
${ReBeeL.guild.name}
الرسآلة
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
 client.on("message", message => {
    var prefix = "%";
 if (message.content === "%help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
              Please Choose:
 ─════════════ {✯EpicBot✯} ════════════─
❧ %help-Admin ➺ ⦁ ***اوامر الادارة*** ⦁

❧ %help-Public ➺ ⦁ ***اوامر العامة*** ⦁

❧ %help-Games ➺ ⦁***اوامر الالعاب*** ⦁ 

❧ %help-Music ➺ ⦁***اوامر الاغاني*** ⦁

❧ %help-Welcome ➺ ⦁***معلومات الترحيب في البوت***⦁

❧ %help2 ➺ ⦁***كيف تظبت اللوج و الولكم***⦁
─════════════ {✯EpicBot✯} ════════════─
      `)
   message.channel.sendEmbed(embed)
    }
   });
 client.on("message", message => {
    var prefix = "%";
 if (message.content === "%help2") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
 ─════════════ {✯EpicBot✯} ════════════─
عشان تفعل الولكم: سوي روم سمه welcome و راح يشتغل تلقائيا الترحيب و الوداع

عشان يشتعل اللوج : سوي روم سمه log و راح يشتغل تلقائيا
─════════════ {✯EpicBot✯} ════════════─
      `)
   message.channel.sendEmbed(embed)
    }
   });
    client.on('message', msg => {
  //Code By : ‡ ♪ ℬℐℓѦℓ✋ ‡#2026
  if(msg.content.startsWith('%suggest')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply(`**الرجاء كتابة اقتراح**`)
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
    **New Suggestion By** : ${msg.member}
       **The Suggestion** :
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }
 });

const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)
    client.user.setStatus("online")
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					.setFooter("EpicBot")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})

					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

const adminprefix = "%VIP";//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
const devs = ['385103221804236800'];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on("message", message => {
 if (message.content === `${prefix}music`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}pause ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}stop ⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل

 `)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

   }
   });


 client.on("message", message => {
 if (message.content === "%help-Music") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('[[❖═════اومر اغاني═══════❖]]')
	  .addField('%play', `لتشغيل أغنية برآبط أو بأسم`)
	  .addField('%skip', `لتجآوز الأغنية الحآلية`)
	  .addField('%pause', `إيقآف الأغنية مؤقتا`)
	  .addField('%resume', `لموآصلة الإغنية بعد إيقآفهآ مؤقتا`)
          .addField('%vol', `تغيير درجة الصوت 100 - 0`)
          .addField('%stop', `لإخرآج البوت من الروم`)
          .addField('%nb', `لمعرفة الأغنية المشغلة حآليا`)
          .addField('%queue', `لمعرفة قآئمة التشغيل`)
      .setFooter('[❖═════اومر اغاني═══════❖]')
  message.channel.send(`:white_check_mark: | Check Your DM`)
  message.author.send({embed});
  }
});
 client.on("message", message => {
 if (message.content === "%help-Welcome") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('[❖═════اومر الترحيب═══════❖]')
	  .addField('%wlc 1', `يخلي البوت يرسل لك ترحيب بشكل حلو`)
	  .addField('%wlc 2', `يخلي البوت يرسل لك ترحيب بشكل تاني خورافي`)
	  .addField('%wlc 3', `يخلي البوت يرسل لك ترحيب بشكل غير الي فاتوا`)
	  .addField('%wlc 4', `يخلي البوت يرسل لك ترحيب بشكل اخر و خورافي مرة`)
          .addField('%wlc 5', `يخلي البوت يرحب بك بشكل حلو`)
          .addField('%wlc 6', `يخلي البوت يرحب بك بطريقة خورافية`)
          .addField('%wlc 7', `يخلي البوت يرحب بك بطريقة حلوة`)
          .addField('%wlc 8', `يخلي البوت يرحب بك مثل الباقي`)
          .addField('%wlc 9', `يخلي البوت يرحب بك مثل الباقي`)
          .addField('%wlc 10', `يخلي البوت يرحب بك مثل الباقي`)
      .setFooter('[❖═════اومر الترحيب═══════❖]')
  message.channel.send(`:white_check_mark: | Check Your DM`)
  message.author.send({embed});
  }
});
   client.on('ready', () => {
     client.user.setActivity("%help | BOT By x̷H̷e̷x̷o̷n̷",{type: 'WATCHING'});
 });
  
 client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'قرعة')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
   let args = message.content.split(" ").slice(1);
   if (command == "say") {
 if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**يلزم لهذآ ألأمر أن تكون من ألإدآرة أو لديك برمشن** `ADMINISTRATOR`' );
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 client.on('message', message => {
 if (message.content.startsWith("%wlc 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('https://cdn.discordapp.com/attachments/445335688628666388/477469283878961160/gfd.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("%wlc 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
   
client.on('message', message => {
 if (message.content.startsWith("%wlc 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 client.on('message' , message => {
 if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
 let args = message.content.split(" ").slice(1).join(" ");
 client.users.get("385103221804236800").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")
 let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : IiMr7MoDyX")
                                                
 message.channel.send(embed);
 }
    
});
 const ms = require("ms");
var user = {};
var warn = {};
client.on('message', async function(message) {
    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete
      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 6) {
        message.author.delete
       }
      delete user[message.author.id];
              message.author.delete
     } else {
      delete user[message.author.id];
              message.author.delete
     }
  }
  if (warn[message.author.id] == 6) {
     if (!message.channel.guild) return;
             message.author.delete
 let muteRole1 = message.guild.roles.find("name", "Muted");
if(!muteRole1) {
        muteRole1 = await message.guild.createRole({
          name: "Muted",
          color: "RANDOM",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole1, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
			READ_MESSAGES_HISTORY:false
        });
		});
  }
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
            hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();
            if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
	setTimeout(function(){
		    message.guild.members.get(message.author.id).removeRole(muteRole1);
	},7200000);
     var msg;
        msg = parseInt();
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`mark:  | There is someone trying `)
      .setDescription(":white_check_mark:  | `There is someone trying to do spam`\n\nName:\n"+`${message.author.username}#${message.author.discriminator}`+"\nThe required procedures have been taken")      .setColor("ff0000")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | you are punished")
      .setDescription(`**You have been Muted **\n\nBy:\n${client.user.tag}\n\nThe reason:\nSpam Chat\n\nMuted Date:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`If the punishment by mistake continues with the administration \n\nTime of unmute : Two hours after the date of the death`")
          .setFooter(message.guild.iconURL)
      .setColor("RANDOM")
      message.author.send(embed20)
   }
});
 client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
 client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')            
            .setTitle('❌ RoleDeleted')
            .addField('Role Name:', role.name, true)
            .addField('Role ID:', role.id, true)
            .addField('By:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
   client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
 client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
   
  
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
     let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`✏ **Message Edited
Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`🗑️ **Message Deleted**
**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RANDOM')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RAMDOM')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
   let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;
   let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
     oldM.guild.fetchAuditLogs()
    .then(logs => {
       let user = logs.entries.first().executor
     if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)
        ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
  })
});
   client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});


client.on('message', message => {
const prefix = '%'	
    if(message.content === prefix + 'createcolors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#03b0c3",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#0798a8",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#077f8d",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#066570",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#025862",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#034850",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#043f45",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#07f6bf",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#08ddac",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#0ac399",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#07a17f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#06785f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#05644f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#055543",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#044537",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#043b2f",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#032c23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#023429",
                    permissions: []
     })     
      
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاءالالوان``')});
    }
	});
	
		client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '51');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '53');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '54');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '55');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '56');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '57');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '58');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '59');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '60');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '-61');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '62');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '63');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '64');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '65');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '66');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '67');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '68');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("%deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '69');
		
		role.delete()
		}
	
	});
	
	client.on('message', msg => {
    if (msg.content === '%colors') {
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/472743324084731914/478685035730305036/color.png"})
    }
  });
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == '%color'){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`RAMDOM`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});




  client.login(process.env.BOT_TOKEN);
