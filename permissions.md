# Permissions

The following are options that may be entered into the userLevel.js configuration file. A list of permission flags can be found [here](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS).
Please note that some flags are not recommended. The list below are recommended options. These do not apply to be command specific.

---
| PERMISSION FLAG | NOTICE |
| ----------- | ----------- |
| "ADMINISTRATOR" | Recommended for Administrator levels |
| "KICK_MEMBERS" | Recommended for Moderator levels |
| "BAN_MEMBERS" | Recommended for Moderator levels |
| "MANAGE_GUILD" | Recommended for Moderator **or** Administrator levels |
| "VIEW_AUDIT_LOG" | Recommended for Elevated levels |
| "MANAGE_MESSAGES" | Recommended for Moderator levels
| "MENTION_EVERYONE" |
| "MUTE_MEMBERS" |
| "DEAFEN_MEMBERS" |
| "MOVE_MEMBERS" |
| "MANAGE_NICKNAMES" |
| "MANAGE_ROLES" | Recommended for Moderator levels |
| "MANAGE_WEBHOOKS" |
| "MANAGE_EMOJIS" |
| **OTHER** | Not Recommended for Usage

### Notices
- Mispelling a permission or failing to place a permission as a string will result in an error being logged to the console. The bot will not be halted by this error.
- Setting `adminOverridesLevel` to **true** will result in any user with the ADMINISTRATOR flag to run any command.
