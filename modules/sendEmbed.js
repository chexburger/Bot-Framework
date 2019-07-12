const { Client, RichEmbed } = require('discord.js');
const config = require('../config.js');

const sendEmbed = function(msg,title,desc,color){
  const embed = new RichEmbed()
  .setTitle(title)
  .setColor(`0x${color}`)
  .setDescription(desc);
  msg.channel.send(embed);
}

module.exports = sendEmbed;
