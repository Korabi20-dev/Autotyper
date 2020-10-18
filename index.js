const discord = require("discord.js");//define discord.js
const bot = new discord.Client();//make a new client/bot
const config = require("./config.json")//define config.json (thats where the bot token/password is stored in)
let messages = [
    "Hello sisterz",
    `Hi,My name is Cool bot and i am an autotyper bot!!!!!`,
    "javascript is EZ",
    "salvage says javascript=typescript",
]//make an array of messages you want to send



bot.on("ready", async () => {//the ready event (triggered when the bot starts/is logged in)
    console.log("Autotyper Started!")//log Autotyper Started! to the console when the bot starts
setInterval(async() => { //set an interval (repeat the code thats in it every ms [in this case 5 seconds] repeatedly untill you shut off the node.js process)
    let message = messages[Math.floor(Math.random() * messages.length)]//randomize a message each time the code loops
    if(typeof message === 'undefined'){//check if what the message variable returns is undefined then if its undefined make message hello
        message = 'Hello'
    }
    const channel = bot.channels.cache.get('766767720754184232').send(message)//change the numbers to the id of the channel you want to send the messages too and make sure the bot is in that channels server
    }, 5000) //change 5000 to the time you want in between messages (time is in ms [miliseconds])
});//ready event ends
bot.login(config.token)