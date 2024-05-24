const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "rb1",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "goodnight":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n  Goodnight Everyone Sleepwell! 🌃",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/goodnight.gif"),
          });
          await api.setMessageReaction("🌃", event.messageID, event.threadID, api);
        break;
case "goodmorning":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n          Goodmorning Everyone!\n                 Have A Nice Day 🌇",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/goodmorning.gif"),
          });
          await api.setMessageReaction("🌇", event.messageID, event.threadID, api);
   case "welcome 🌸":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n    Welcome! Enjoy Your Stay! 🌸",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/welcome.gif"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "prefix2":
          message.reply({
            body: "Hello, My Lord My Prefix Is » ? «",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/garou.gif"),
          });
          await api.setMessageReaction("🪐", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "⚪【•𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍-𝐈𝐍𝐅𝐎•】⚪\n\n🟡【•𝐁𝐎𝐓-𝐍𝐀𝐌𝐄•】🟡\n\n【•】𝐑𝐁•𝐁𝐎𝐓___//❤️💛🤍💜💚\n\n🔴【•𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑•】🔴\n\n🔵【•𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐀𝐋•】🔵\n\n🟣【•𝐀𝐆𝐄-𝟐𝟕•】🟣\n\n🟢【•𝐆𝐄𝐍𝐃𝐄𝐑-𝐌𝐀𝐋𝐄•】🟢\n\n⚫【•𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊•】⚫\n\nhttps://www.facebook.com/www.xxx.com.009\n\n🟠【•𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄•】🟠\n\n🟤【•𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏•】🟤\n\nwa.me/+8801782721761\n\n🆚𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗👉【•】🆚",
            attachment: fs.createReadStream("scripts/cmds/RB-BADOL-KHAN/owner.png"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
