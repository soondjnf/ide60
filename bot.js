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


client.on('message', message => {
     if (message.content === "+servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});


  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`${prefix}invite | BOT By xHexon `,` ${prefix}support | BOT By xHexon `,`دخل البوت سيرفرك و اعطه اعلى رتبة و سوي روم اسمه log و بس:D  `,`${client.users.size} Users | Bot By xHexon `];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/master__gamersyt`);
    }, ms);1000

});


client.on("message", message => {
 if (message.content === "+support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© EpicBot AntiHack Servers جميع الحقوق محفوظة 2018 لــبوت')
      .addField('سيرفر الدعم الفني', `https://discord.gg/JM2sNEp`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM")
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

	var prefix = "+";

       const prefix = "+"

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

client.login(process.env.BOT_TOKEN);
