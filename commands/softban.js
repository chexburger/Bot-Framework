// softban.js
// Default Moderation Command

module.exports = {
  meta: {
    help: 'Temporarally Bans user to delete last 24 hours of messages',
    usage: '@user',
    doNotDocument: false,
    level: 9999999999, // Change to Role level to use
  },
  fn: function(msg){
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const toUser = msg.mentions.users.first();
    if(user){
      const member = msg.guild.member(toUser);
      if(member){
        member.ban({reason:'Softban'}).then(() => {
          msg.guild.fetchBans().then(bans => {
            bans.forEach(user => {
              if(user == toUser){
                msg.guild.unban(user);
                msg.reply(`Successfully Softbanned ${user.tag}`);
              }
            })
          })
        }).catch(err => {
          msg.channel.send(`There was an error softbanning ${user.tag}.\nThe following error was thrown:`);
          throw(err); // Rethrow to be caught by the top-level error catching
        });
      }
    }else{
      msg.reply("No member was mentioned to be softbanned.");
    }
  }
}
