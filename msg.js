const Discord = require('discord.js')
const client = new Discord.Client()
const secret = require('./secrets')

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // The bot only responds to the user
        return
    }
    
    if (receivedMessage.content.startsWith("!")) { // bot only responds if message starts with '!'
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Removes the exclamation mark
    let splitCommand = fullCommand.split(" ") 
    let primaryCommand = splitCommand[0] // The actual command

    console.log("Command received: " + primaryCommand)

    if (primaryCommand == "dog") {
        dogCommand(arguments, receivedMessage)
    } else if (primaryCommand == "goodboy") {
    	goodboyCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `!dog`")
    }
}

// if the user inputs '!dog' the bot will reply by with "i am a dog with glasses" and then post
// a picture of a dog with glasses

function dogCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("I am a dog with glasses")
    
    var generalChannel = client.channels.get(secret.channel) //goes to the right channel
    
    const webAttachment = new Discord.Attachment('https://i.imgur.com/QiaQBwO.png') //picture of dog
    generalChannel.send(webAttachment)
}

// if the user inputs '!goodboy' the bot will reply by with "i am the senate" and then post a 
// picture of a dog photoshoped into palpatine
function goodboyCommand(arguments, receivedMessage) {
    
    var generalChannel = client.channels.get(secret.channel) //goes to the right channel
    
    const webAttachment = new Discord.Attachment('https://i.imgur.com/vl5XzCo.jpg') // picture of darth doggo
    generalChannel.send(webAttachment)
}

client.login(secret.token) // bot token