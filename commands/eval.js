// eval.js
// Core Command

const sendError = require('../modules/sendError.js');
const sendEmbed = require('../modules/sendEmbed.js');
const request = require('request');

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports = {
  meta: {
    help: 'Executes specified code. Can run javascript and bot functions. Constrained to eval.js Module.',
    usage: '',
    doNotDocument: true,
    level: 9999999999, // Change to Role level to use
  },
  fn: function(msg,client){
    try{
      const args = msg.content.split(" ").slice(1);
      const code = args.join(" ");
      if((msg.content.includes("token") && (msg.content.includes("client") || msg.content.includes("config"))) || msg.content.includes("@everyone") || msg.content.includes("@here")){
        msg.reply("Sorry, a prohibited action was detected. I cannot proceed with this request.")
      }else{
        let evaled = eval(code);
        if(typeof(evaled) !== "string"){
          evaled = require("util").inspect(evaled);
          // sendEmbed(clean(evaled)), {code:"x1"});
          sendEmbed(msg,"Eval Response",clean(evaled),"00ffb2");
        }
      }
    }catch(err){
      sendError(1,`\`\`\`xl\n${clean(err)}\n\`\`\``,msg);
    }
  }
}
