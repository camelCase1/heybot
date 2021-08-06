const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login('ODcyNTc3NDIyNzY2MjU2MTU5.YQr5DQ.LqL_tn4Xjiji9AiAUPR_FXnkr00');

let randomNumber = 0

client.on("message", msg => {
    if(msg.content.toLowerCase() === "!hello"){
        msg.channel.send('hello dayre ' + msg.author.username)
    }
    if(msg.content.toLowerCase() === "!guess"){

        randomNumber = Math.floor(Math.random() * 25 + 1);

        msg.channel.send('Nice, Respond with !(YourGuess) to start guessing. Guess a number 1 - 25 ' + msg.author.username)
    }
    let userGuess = msg.content.toLowerCase();
    if(userGuess[0] == '!'){
        const userNumber = parseInt(userGuess.replace('!', ''))
        if(userNumber == randomNumber){
            msg.reply('https://tenor.com/view/%E3%81%8A%E7%96%B2%E3%82%8C%E3%81%95%E3%81%BE-%E9%A0%91%E5%BC%B5%E3%81%A3%E3%81%9F-%E3%82%88%E3%81%8F%E3%82%84%E3%81%A3%E3%81%9F-you-did-it-congratulate-gif-15782376')
        } else if (userNumber > randomNumber){
            msg.reply('Go lower')
        } else if (userNumber < randomNumber){
            msg.reply('Go Higher')
        }
    }

/*

    client.on("message", msg => {
        const meme = [https://tenor.com/view/eat-eating-food-starving-hungry-gif-19676854, ]
        if(msg.content.toLowerCase() === "!meme"){
            msg.channel.send()
        }

*/

    console.log(msg.author.username)
    console.log(randomNumber)
})





























