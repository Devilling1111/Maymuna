module.exports = {
	config: {
		name: ".",
		aliases: [],
		version: "1.0",
		author: "RB-BADOL-KHAN",
    

		countDown: 5,
		role: 2,
		shortDescription: "developer only dear",
		longDescription: "",
		category: "18+",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	    var link = [
   "https://i.imgur.com/mNesqCm.jpg",
"https://i.imgur.com/ChtMmje.jpg",
"https://i.imgur.com/2oTwWjZ.png",
"https://i.imgur.com/ZOcTTvR.jpg",
"https://i.imgur.com/ccLl6Ym.png",
"https://i.imgur.com/bdQ5fK9.png",
"https://i.imgur.com/zyqGxHc.png",
"https://i.imgur.com/1dFL3ZI.png",
"https://i.imgur.com/vDM906Y.jpg",
"https://i.imgur.com/hCoFifQ.jpg"    
        
]

let img = link[Math.floor(Math.random()*link.length)]
message.reply({body: "my ",
  attachment: await global.utils.getStreamFromURL(img)
})
}
    }
