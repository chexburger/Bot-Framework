const { Client, RichEmbed } = require('discord.js');
const config = require('../config.js');

const sendError = function(type,err,message){
  const embed = new RichEmbed()
  .setTitle("Error")
  .setColor(0xFF0000)
  .setDescription(err);
  if (type == 1){
    message.channel.send(embed);
  }
  if (type == 2){
    console.warn("sendError for specific channel unavailable.");
    // Use config to send log to specific channel.
  }
}

module.exports = sendError;
