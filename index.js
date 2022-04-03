const Discord = require('discord.js')

const TOKEN = "OTU5OTcwODgwMzU4ODYyOTAw.YkjojQ.yFXV-EXe4vo3SbqICMeOHPK_ePo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.login(TOKEN)

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

client.on("messageCreate", async msg => {
    if(msg.guild && !msg.author.bot && msg.content.includes("!embed")){
        const embed = new Discord.MessageEmbed().setTitle("CUMOINMTRASSBROTHER").setColor("BLUE").setThumbnail(client.user.displayAvatarURL()).setTimestamp()
        
        client.channels.cache.get('channelID').send('hi');
        
        // msg.channel.send({embeds:[embed]})
    }
})