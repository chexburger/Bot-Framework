// userLevel.js
// Core Module

const sendError = require('../modules/sendError.js');
const config = require('../config.js');


function getIdFromRoleName(roleName,message){
  if(typeof(roleName) == "string"){
    var rolee = message.guild.roles.find(role => role.name == roleName);
    return rolee.id;
  }else{
    throw("getIdFromRoleName Error. Typeof roleName is not String.");
    return 0;
  }
}

module.exports = {
  getLevel: function(message){
    const dId = Number(message.author.id);
    var roles = message.member.roles;
    var highestLevel = 0;
    for(var levelName in config.levels){ // Get each level from Levels
      var sLevel = config.levels[levelName]; // The object containing information for each level
      var roleLevel = sLevel.ID;
      for(var i=0; i < sLevel.Roles.length; i++){
        var roleae = sLevel.Roles[i]; // The name of the role
        if(roles.has(getIdFromRoleName(roleae,message))){
          if (roleLevel > highestLevel){
            highestLevel = roleLevel;
          }
        }
      }
      for(var e=0; e < sLevel.UsersInLevel.length; e++){
        if(dId == sLevel.UsersInLevel[e]){
          if(roleLevel > highestLevel){
            highestLevel = roleLevel;
          }
        }
      }
    }
      // Code executed after all above code. Used to tell bot.js the permission level.
    // if(typeof(highestLevel) != ('number')){throw("highestLevel invalid value. Currently: "+highestLevel+" ("+typeof(highestLevel)+")");};
    if(tyoeof(highestLevel) != ('number')){highestLevel = 0; throw(`highestLevel invalid value. Currently: ${highestLevel} (${typeof(highestLevel)})`)};
    return highestLevel; // Returns User Level. highestLevel or 0
  }
}
