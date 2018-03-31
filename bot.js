const Discord = require("discord.js");
const Client = new Discord.Client();
const Prefix = "!";

Client.on('ready', ()=>{
    console.log("Bot is Online");
})

Client.on('message', (message)=>{

        if(message.content.startsWith(Prefix + "sos")){
            message.channel.send("Check PM");
            message.author.send("Hello," + message.author + "I can't show you all of my commands, because my creator isn't bothered to list them. Sorry for the inconvenience.")
        }
})


Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "oof")){
            message.channel.send("oof");
        }
})


Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "nerd")){
            message.channel.send("https://gyazo.com/978a45210780c767773412e6e47bedd6");
        }
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "pg")){
            message.channel.send("THIS IS A PG SERVER SO ST..... W8 I CAN'T SAY THAT.....");
        }
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "ez")){
            message.channel.send("https://gyazo.com/6a60af795a337c27fbe3cc3ea80d9c3a");
        }
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "quav")){
            message.channel.send("https://www.youtube.com/channel/UCPAXl91Uw9aCwMZWZlnBDXQ");
        }
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(Prefix)) return;

        if(message.content.startsWith(Prefix + "rush")){
            message.channel.send("https://www.youtube.com/channel/UCINDKkUCb19VqaFW7o7scQw");
        }
})

Client.login("process.env.NDI5NjA4NjUxMTkyNDAxOTIw.DaEaYQ.Nv5fm6ILA-8GIqUpPkUKULtEyC0");
