const fs = require('fs');
module.exports = {
  config: {
    name: "rbbot",
    version: "1.0",
    author: "RB-BADOL-KHAN",
		countDown: 5,
		role: 0,
		shortDescription: "no prefix",
		longDescription: "no prefix",
		category: "no prefix",
	},
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === ".inbox") {
      return message.reply({
        body: "😊স্যার আপনার ইনবক্সে গালি দিছি চেক দিয়েন ধন্যবাদ😑",
        attachment: fs.createReadStream(__dirname + `/noprefix/RB-BOT.png`),
      });
    }
  }
};
