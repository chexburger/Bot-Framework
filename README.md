##Discord Bot Framework

`Bot Framework for individual use only`

###Syntax: [Discord.js](https://discord.js.org)

- Commands based on Roles
- Lock role checking to specific server for Multi-Server Use
- Help command with command exclusion
- Eval Command with safeguard on Bot Token (Eval Disabled by Default)


###Eval Command Restrictions

**All functionality of the eval command may be modified by the bot owner**
- Eval may not execute any command containing the Client and Token
- Some functions are unavailable unless defined in `eval.js`
- Eval is unable to execute commands containing `@everyone` or `@here`

###Role Configuration Example

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
