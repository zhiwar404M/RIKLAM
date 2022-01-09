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
vex.author.send("سلاوی خوای گەورە گشت تیمە کوردیەکان ئێمە وەک ستافی 4YOU تیدی ئێمە بەهێزەکە دەروێنن لەدوای ئەو کە سێرڤەرمان هاک کراو چەند مێمبەرێ کیک کرا ئەوانەی کە ریجستەریان بۆ تیدی ئێمەکە کردوە جۆینی سێرڤەر بکەنەوە لە بەرواری 25/1/2022 TDM ئێمەکە دەروێنم دوایەکا نەیەن کلەیی بکەن ئاگادار بن دەست پێدەکات لە رێکەوتی 25/1/2022لەگەل رێزم بۆ هەموولایەکheartheart@everyone https://discord.gg/y6DjZNuUKd")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("927305126027345950")//id bashe reklam
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

const channelid = "927305136731201607"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("ODUwODMyMDE1ODg3Njk1OTAy.YLvdEA.PxVWCWCo5nu5uBg7tIIN0a3_L1Y")


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

