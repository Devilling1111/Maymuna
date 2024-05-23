const fs = require('fs');
module.exports = {
  config: {
    name: "wp",
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
    if (event.body && event.body.toLowerCase() === ".wp") {
      return message.reply({
        body: "❤️এডমিনকে হোয়াটসঅ্যাপে কন্টাক করুন❤️\n\nwa💛.me/+8801782721761💛",
        attachment: fs.createReadStream(__dirname + `/RB-BADOL-KHAN/wp.jpeg`),
      });
    }
  }
};
