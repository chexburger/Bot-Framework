## Discord Bot Framework
### A modular approach to personal use Discord bot development

`Bot Framework for individual use only`

### *IMPORTANT NOTICES*
In order to run this bot, Node.js must be installed on the host machine.
Most online hosts will reinstall Node Package Manager (npm) upon launching the bot.
Self-hosting requires manual installation of the Node Packages through the command `npm install`.
**Discord Terms of Service __Prohibit__ usage of user account modification. Often called self-bots. Automate Personal Accounts at own Risk**

---
### Syntax: [Discord.js](https://discord.js.org)

- Commands based on Roles
- Help command with command exclusion
- Eval Command with safeguard on Bot Token (Eval Disabled by Default)

---
### Eval Command Restrictions
**All functionality of the eval command may be modified by the bot owner**
- Eval may not execute any function that may contain the bot token
- Some functions are unavailable unless defined in `eval.js`
- Eval is unable to execute commands containing `@everyone` or `@here`

---
### Role Configuration Example
```javascript
levels: {
  User: {
    Roles: [],
    ID: 0, // Default Level, Do Not Modify
    UsersInLevel: []
  },
  Member: {
    Roles: ["Member"],
    ID: 1,
    UsersInLevel: [498231312415588364]
  },
  Admin: {
    Roles: ["Admin","VIP"],
    ID: 2,
    UsersInLevel: []
  },
}
```
