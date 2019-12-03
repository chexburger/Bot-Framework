const { Client, RichEmbed } = require('discord.js');
const config = require('../config.js');
const logChannel = config.logChannel;

const sendError = function(type,err,message){
  const embed = new RichEmbed()
  .setTitle("Error")
  .setColor(0xFF0000)
  .setDescription(err);
  if (type == 1){
    message.channel.send(embed);
  }
  if (type == 2){
    if(!logChannel || logChannel == 0){
      consile.warn("sendError for specific channel unavailable");
      return false;
    }
    try{
      var channel = client.channels.get(String(logChannel));
      channel.send(embed);
    }catch(error){
      console.warn("Unable to get channel for logging");
    }
  }
}

module.exports = sendError;
