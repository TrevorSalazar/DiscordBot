
const Commando = require('discord.js-commando')
const bot = new Commando.Client();
const ffmpeg = require("ffmpeg");

const token = 'NTU0MDYwNjY5NTU3OTMyMDQz.D2XMPA.hyBqvWy8Y-dGF7esSTY0vQT1V-M';

const PREFIX = '!';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

function emoji(id) {
	return bot.emojis.get(id).toString();
}

bot.on('ready', () =>{
	console.log('This bot is online!');
})

bot.on('message', msg=>{
	let args = msg.content.substring(PREFIX.length).split(" ");
})

bot.login(token);