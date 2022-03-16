const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log("4YOU UP ★ ZHIWAR404M")
  client.user.setActivity("4YOU UP , ZHIWAR UP")
})



client.on("message", vex => { 
if(vex.content.includes("discord.gg")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("😐 لەیەک دانە زیاتر دانانێم خۆت ئەزیەت مەدە😐 دانێ ئەگینا ڕیکلامەکە رەش دەکەمەوە لەگەل😁 ");
    } else {

if(vex.channel.type === "dm"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send(" ؟؟ ❤https://discord.gg/y6DjZNuUKd")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");  s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("952254008309981194")//id bashe reklam
hama1.send(`
ئەم بۆتە دروستکراوە لە لایەن 4YOU ZHIWAR404M

ناردرا لە لایەن
<@${vex.author.id}> ` +`
سێرڤەرەکە
${s2}
          `)
  }

}}
  talkedRecently.add(vex.author.id);
        setTimeout(() => {
          talkedRecently.delete(vex.author.id);
        }, 60000);
  
  
})

const channelid = "951450659981516810"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("ODUwODMyMDE1ODg3Njk1OTAy.YLvdEA.m5Y4ksuU4nE2IXk9HtRyqjDtiPY")


///hi

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("slaw riklam agornawa")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("Slaw riklam")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("riklam")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("slaw riklam dagornawa")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("RIKLAM")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("SLAW RIKLAM")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("Reklam?")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("Slaw reklam dagornawa?")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("ریکلام")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("ڕێکلام")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("ریکلام دەگۆرنەوە")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("ریکلام هەیە")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SHVAN => {
  if (SHVAN.content.startsWith("Reklam")) {
    SHVAN.reply("** ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});
