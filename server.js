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
      vex.author.send("Wait 1 minute before getting typing this again. - ");
    } else {

if(vex.channel.type === "dm"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("https://discord.gg/y6DjZNuUKd سلاوی خوای گەورە گشت تیمە کوردیەکان ئێمە وەک ستافی 4YOU تیدی ئێمە بەهێزەکە دەروێنن لەدوای ئەو کە سێرڤەرمان هاک کراو چەند مێمبەرێ کیک کرا ئەوانەی کە ریجستەریان بۆ تیدی ئێمەکە کردوە جۆینی سێرڤەر بکەنەوە لە بەرواری 25/1/2022 TDM ئێمەکە دەروێنم دوایەکا نەیەن کلەیی بکەن ئاگادار بن دەست پێدەکات لە رێکەوتی25/1/2022لەگەل رێزم بۆ هەموولایەک❤")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("")//id bashe reklam
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

const channelid = "848301704100577290"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("ODUwODMyMDE1ODg3Njk1OTAy.YLvdEA.o1ZaznrXAzbGAXPaE7hTqGKHhNA")
