// kick.js
// Default Moderation Command

const config = require('../config.js');

module.exports = {
  meta: {
    help: 'Kicks specified user from the guild',
    usage: '@user reason',
    doNotDocument: false,
    level: 99999, // Change to Role level to use
  },
  fn: function(msg){
    const user = msg.mentions.users.first();
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    // prefix + kick + spacing + tag
    if(user){
      const member = msg.guild.member(user);
      if(member){
          const reason = msg.content.substring(config.prefix.length+4+2+args[1].length,msg.content.length);
          member.kick(`${reason}` || `No Reason Provided`).then(() => {
          msg.reply(`Successfully Kicked ${user.tag}`);
        }).catch(err => {
          msg.channel.send(`There was an error kicking ${user.tag}.\nThe following error was thrown:`);
          throw(err); // Rethrow to be caught by the top-level error catching
        });
      }
    }else{
      msg.reply("No member was mentioned to be kicked.");
    }
  }
}
