const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

     client.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM!")
		   message.author.send({embed})
	   }
   });

const prefix = "+"

client.on('message', message => {
     if (message.content === "+servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)
	client.user.setStatus("idle")
client.user.setStatus("Online")
client.user.setGame(`+support +invite دخل البوت سيرفرك و اعطه اعلى رتبة و سوي روم اسمه log و بس:D ${client.users.size} Users | Bot By xHexon`, "https://twitch.tv/Testing")
});


client.on("message", message => {
 if (message.content === "+support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© EpicBot AntiHack Servers جميع الحقوق محفوظة 2018 لــبوت')
      .addField('سيرفر الدعم الفني', `https://discord.gg/B4cXsjD`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM")
 }
});





   const child_process = require("child_process");
  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "/c.js");
  }, time);
});
