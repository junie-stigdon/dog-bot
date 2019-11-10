# Dog_Bot

This program is used for a bot in Discord that is linked to a single channel on a server. It will listen for specific inputs from users and respond by posting images of a dog saying something silly. 

#### Install discord.js

This app will make use of [node.js](nodejs.org) and [discord.js](discord.js.org).

Once you have node.js downloaded, you can run the following on your terminal:

```
npm install discord.js
```
#### Create your bot on discord

- Create a bot application and then invite it to a server of your choice
  - If you do not know how to create bots in discord, review this [documentation](https://discordpy.readthedocs.io/en/latest/discord.html)

- Get your bot's ***secret*** token
  - Go to the [developers](https://discordapp.com/developers/applications) page
  - Select your application
  - Copy/Reveal the "Client Secret" 
  - Do not share this token publicly

- Get your channel's ID
  - Go to the server with the channel you wish to implement this bot on
  - Right-click the channel's name on the left navigation bar
  - Select "Copy ID"

- In msg.js, anywhere it says *secret.channel* enter your "Channel ID" in quotation marks

``` 
    var generalChannel = client.channels.get(secret.channel) //goes to the right channel
```
- In msg.js, where it says *secret.token* enter your "Secret Token" in quotation marks

```
client.login(secret.token) // bot token
```
