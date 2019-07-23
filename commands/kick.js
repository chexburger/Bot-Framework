// kick.js
// Default Moderation Command

const config = require('../config.js');

module.exports = {
  meta: {
    help: 'Kicks specified user from the guild',
    usage: '@user reason',
    doNotDocument: false,
    level: 3, // Change to Role level to use
  },
  fn: function(msg){
    const user = msg.mentions.users.first();
    const reason = msg.substring(config.prefix.length+4+2,msg.content.length);
    // prefix + kick + spacing
    if(user){
      const member = msg.guild.member(user);
      if(member){
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
