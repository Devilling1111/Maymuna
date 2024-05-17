module.exports = {
    config: {
        name: "admin",
        version: "1.0",
        author: "RB-BADOL-KHAN",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "Admin") return message.reply("┏━━ [  𝐁𝐨𝐭•𝐀𝐝𝐦𝐧 ]━━➣\n┃🌻𝐍𝐚𝐦𝐞 :  [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 ]\n┃🌻𝐅𝐚𝐜𝐜𝐛𝐨𝐨𝐤 :  [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___👿🤬😈 ]\n┃🌻𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : [ 𝐈𝐬𝐥𝐚𝐦 ]\n┃🌻𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐊𝐡𝐮𝐥𝐧𝐚 ]\n┃🌻𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐏𝐚𝐢𝐤𝐠𝐚𝐜𝐡𝐚 ]\n┃🌻𝐆𝐞𝐧𝐝𝐞𝐫 : [ 𝐌𝐚𝐥𝐞 ]\n┃🌻𝐀𝐠𝐞 : [ 𝟏𝟖+ ]\n┃🌻𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : [ 𝐒𝐢𝐧𝐠𝐥𝐞 ]\n┃🌻𝐖𝐨𝐫𝐤 : [ 𝐉𝐨𝐛 ]\n┃🌻𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 : [ wa.me/+8801782721761 ]\n┃🌻𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐔𝐬𝐞𝐫 : [ RAJA.BABU.TERA.REAL.ABBU.OK.07 ]\n┃🌻𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐚𝐫𝐞 : [ m.me/100007070042228 ]\n┗━━━━━━━━━━━━➢");
}
}; 
