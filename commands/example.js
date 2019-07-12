// example.js
// Default Command

module.exports = {
  meta: {
    help: 'Example Command Description',
    usage: '',
    doNotDocument: true,
    level: 0,
  },
  fn: function(msg){
    msg.channel.send("This is an example command. It requires Level 0 (User).");
  }
}
