const fs = require('fs');
module.exports = {
  config: {
    name: "mcs",
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
    if (event.body && event.body.toLowerCase() === "@RB BADOL KHAN") {
      return message.reply({
        body: "🤟বাদল বস এখন ব্যস্ত আছে মেসেজ করে তাকে ডিস্টার্ব করবেন না🤟",
        attachment: fs.createReadStream(__dirname + `/RB-BADOL-KHAN/badol-boss.mp3`),
      });
    }
  }
};
