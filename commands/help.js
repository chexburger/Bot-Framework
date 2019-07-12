// help.js
// Core Command

const sendEmbed = require('../modules/sendEmbed.js')
const fs = require('file-system');

module.exports = {
  meta: {
    help: 'Shows a list of commands.',
    usage: '',
    doNotDocument: false,
    level: 0,
  },
  fn: function(msg){
    var responseArray = [];
    fs.readdirSync('./commands/').forEach(file => {
      var cmd = require(`./${file}`); // Gets every file to retreive Information
      var name = file.slice(0,file.length-3); var description = cmd.meta.help; var usage = cmd.meta.usage; var level = cmd.meta.level;
      if(usage==""){usage="No Arguments"};
      if(!cmd.meta.doNotDocument){
        responseArray.push(`**Command Name:** ${name}\n**Description:** ${description}\n**Argument Usage:** ${usage}\n**Level:** ${level}\n`);
      }
    });
    // sendEmbed(msg,"WIP","This command is still being worked on. Check back later.","78ff2b");
    sendEmbed(msg,"Commands List",responseArray.join('\n')+"","78ff2b");
  }
}
