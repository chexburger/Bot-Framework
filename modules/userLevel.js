// userLevel.js
// Core Module

const sendError = require('../modules/sendError.js');
const config = require('../config.js');
const server = config.serverConfiguration;

function getIdFromRoleName(roleName,guild){
  if(typeof(roleName) == "string"){
    try{
      var rolee = guild.roles.find(role => role.name == roleName);
      return rolee.id;
    }catch(error){
      return 0;
    }
  }else{
    throw("getIdFromRoleName Error. Typeof roleName is not String.");
    return 0;
  }
}

module.exports = {
  getLevel: function(message,client){
    const dId = Number(message.author.id);
    const guild = client.guilds.get(server) || message.guild;
    var guildMember = guild.members.get(message.author.id);
    var roles = guildMember.roles;
    var highestLevel = 0;
    for(var levelName in config.levels){ // Get each level from Levels
      var sLevel = config.levels[levelName]; // The object containing information for each level
      var roleLevel = sLevel.ID;
      for(var i=0; i < (sLevel.Role || []).length; i++){
        var roleae = sLevel.Roles[i]; // The name of the role
        if(typeof(roleae) == 'undefined' || null){console.log("Invalid Role"); return};
        try{
          if(roles.has(getIdFromRoleName(roleae,guild))){ //roleae,message
            if (roleLevel > highestLevel){
              highestLevel = roleLevel;
            }
          }
        }catch(error){
          console.error(error);
        }
      }
      for(i=0;i<(sLevel.Permissions || []).length;i++){
        try{
          if(guildMember.hasPermission(sLevel.Permissions[i])){
            if(roleLevel > highestLevel){
              highestLevel = roleLevel;
            }
          }
        }catch(error){
          console.warn(error)
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
    highestLevel = (config.adminOverridesLevel == true ? 1e8 : highestLevel);
    // Code executed after all above code. Used to tell bot.js the permission level.
    if(typeof(highestLevel) != ('number')){highestLevel = 0; throw(`highestLevel invalid value. Currently: ${highestLevel} (${typeof(highestLevel)})`)};
    return highestLevel; // Returns User Level. highestLevel or 0
  }
}
