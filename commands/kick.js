// kick.js
// Default Moderation Command

module.exports = {
  meta: {
    help: 'Kicks specified user from the guild',
    usage: '@user reason',
    doNotDocument: false,
    level: 9999999999, // Change to Role level to use
  },
  fn: function(msg){
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const user = msg.mentions.users.first();
    if(user){
      const member = msg.guild.member(user);
      if(member){
        member.kick(`${args[1]}` || `No Reason Provided`).then(() => {
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
