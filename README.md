# Dog_Bot

This program is used for a bot in Discord that is linked to a single channel on a server. It will listen for specific inputs from users and respond by posting images of a dog saying something silly. 

---

#### Installation

This app will make use of [node.js](nodejs.org) and [discord.js](discord.js.org).

Once you have node.js installed, locate where you downloaded this repo and run the following on your terminal:

```bash
npm install
```

---

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

---

#### Create secrets.js

You will need to create a file in your directory labeled "secrets.js":

```bash
touch secrets.js
```

Edit the file and type the following (input your bot's secret token and channel ID inside the quotes):

```JavaScript
module.exports = {
    token: "INPUT SECRET TOKEN HERE",
    channel: "INPUT CHANNEL ID HERE"
}
```

---

#### Run your bot

Locate your msg.js file and type the following command in your terminal:

```bash
node msg.js
```
