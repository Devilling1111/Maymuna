const fs = require('fs');
module.exports = {
  config: {
    name: "🤦‍♂️",
    version: "1.0",
    author: "\x52\x55\x42\x49\x53\x48",
    countDown: 5,
    role: 0,
    shortDescription: "send a voice ",
    longDescription: "send a voice ",
    category: "noprefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "🥺") {
      return message.reply({
        body: "🙂",
        attachment: fs.createReadStream(__dirname + `/noprefix/RB-BOT.png`),
      });
    }
  }
};
