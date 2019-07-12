module.exports = {
  prefix: "~", // Bot Prefix
  token: "", // Discord Bot Token
  logChannel: 0, // Channel ID for Bot Logs (Make a Pull Request if you add it to sendError.js)
  levels: {
    User: {
      Roles: [],
      ID: 0, // Default Level, Do Not Modify
      UsersInLevel: []
    },
    Name: {
      Roles: [], //Roles: ["Role-Name"],
      ID: 1, // Level used when running commands
      UsersInLevel: [] // UsersInLevel: [498231312415588364]
    },
  }
}
