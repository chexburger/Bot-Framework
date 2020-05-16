module.exports = {
  prefix: "~", // Bot Prefix
  token: "", // Discord Bot Token
  logChannel: "", // Channel ID for Bot Logs. Leave blank for no channel
  serverConfiguration: "0", // Set this to the ID of a server to check roles in (bot must be in server). Leave at "0" for roles in any server (Not Recommended)
  adminOverridesLevel: false, // Set to true to allow anyone with the ADMINISTRATOR flag to run any command (level 1e8)
  levels: {
    User: {
      Roles: [],
      Permissions: [],
      ID: 0, // Default Level, Do Not Modify
      UsersInLevel: []
    },
    Name: {
      Roles: [], //Roles: ["Role-Name"],
      ID: 1, // Level used when running commands
      Permissions: [], // Any permissions that a user must have to hold this role. See permissions.md
      UsersInLevel: [] // UsersInLevel: [498231312415588364]
    },
  }
}
