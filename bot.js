// Bot Requirements
const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const config = require('./config.js');
const token = config.token;
const fs = require('file-system');

const modules = {
  userLevel: require('./modules/userLevel.js'),
  sendError: require('./modules/sendError.js'), // 1: Respond; 2: Server Log
  sendEmbed: require('./modules/sendEmbed.js')
}

// Configuration
var prefix = config.prefix;


// Functions
function isCommand(cmdae){
  fs.readdirSync('./commands/').forEach(file => {
    if(file == cmdae+'.js'){
      return true;
    }
  });
  return false;
}


client.on('ready', () => {
  // Any code to run when the bot is finished loading up on Discord
});

client.on('message', (message) => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  if(message.channel.type == ("dm" || "group")){modules.sendError(1,"Cannot respond in DMs",message)}
  try{
    fs.readdirSync('./commands/').forEach(file => {
      if(file == command+'.js'){
        var commandModule = require(`./commands/${command}.js`);
        var level = modules.userLevel.getLevel(message);
        if(typeof(level) != ('number')){modules.sendError(1,"Unable to Verify Level\nRecieved: "+level,message); return;};
        if(level < commandModule.meta.level){modules.sendError(1,"Lacking Required Permissions\nYour Level: "+level,message); return;};
        commandModule.fn(message,client);
      }
    });
  }catch(err){
    modules.sendError(1,err.stack+'\n\n**Please send this error to a bot developer or administrator.**',message);
  }
});

client.login(token).catch(function(e){
	console.log(e)
});
