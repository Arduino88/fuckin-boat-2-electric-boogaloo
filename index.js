const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.login(process.env.TOKEN)

const channel = client.channels.cache.get(channel => channel.name === '928817714645053502')

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity("eat ass and smoke grass")
})

client.on("messageCreate",  (message) => {
    if (message.content == "hi"){
        message.reply("what the fuck is pu kyle")
        //channel.send('hello!')
  //.then(message => console.log(`Sent message: ${message.content}`))
  //.catch(console.error);
    }
})