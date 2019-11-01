// purge.js
// Default Moderation Command

const config = require('../config.js');

module.exports = {
  meta: {
    help: 'Mass delete a specified amount of Messages',
    usage: 'amount',
    doNotDocument: false,
    level: 9999,
  },
  fn: function(msg){
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    var amount = Number(args[1])
    if(!amount){msg.channel.send("Please provide an amount of messages to purge."); return};
    msg.channel.bulkDelete(amount+1).then(function(response){
      // Anything can be done here. Called once messages are deleted successfully.
    }).catch(function(error){
      msg.channel.send("An error occurred while purging messages."); return;
    });
  }
}
