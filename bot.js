const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530266479644508162")
setInterval(function() {
channel.send(`**! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý. ! - Haaăaadý.! - Haaăaadý.**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
