const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot2",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("hh:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["🌻💚
😔mu life line 💔
-খুব বেশি পছন্দের মানুষ গুলোর সাথে,
-খুব বেশিদিন সম্পর্ক থাকে না.!🙂🥺
︵❝།།💚🌺" , "- হয়তো অভিমান করে কথা বলবে না🙂
- তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕" , "🥀"মানুষের খারাপ সময় সারাজীবন থাকে না!
কিন্তু খারাপ সময়ে যারা খারাপ ব্যবহার করে,
তাদের সারাজীবন মনে রয়ে যায়"😥💔","পৃথিবীর সব কিছু পুরনো হয়ে যায় ভাঙ্গারী হয়ে যায়,
কিন্তু ভালোবাসার মানুষটি কখনো পুরানো বা ভাঙ্গারী হয়ে যায় না।😢💔❗" , "●━━━━🌺🖤
❛❛𝗧𝗼 𝘁𝗲𝗹𝗹 𝘁𝗵𝗲 𝘁𝗿𝘂𝘁𝗵❞
কিছু মানুষ better কাউকে খুঁজতে গিয়ে...!!😐
Best কাউকে হরিয়ে ফেলে...!!🙂🥀" , " 😔my life line💔
-- সবচেয়ে বড় ধোঁকা কি জানো__?😊
_কাউকে হারানোর ভয়ে কান্না করেও__!!😇
- পরে হাসিমুখে তাকে ছেড়ে দেয়া__!!🖤🥀" , "- যে সত্যি তোমাকে ভালোবাসবে, সে কখনোই 🙄
- তোমাকে ভুলে থাকতে পারবে না.!🥀" , "❤️🥀মধ্যবিত্ত ঘরের ছেলের পকেট
ভর্তি টাকা থাকেনা!
মাথা ভর্তি টেনশন থাকে🙍‍♂️‍❤️" , "┏╮/╱🌺
╰ 🥰🥰.●🦋
╱/ ╰ ❥সফলতা কত দুর জানি না•••🙂)
💜 ☹︎ ক্লান্ত হবো কিন্তু থেমে যাবো না 🌼💞
💞 ≈≈≈≈>>📿ইনশাআল্লাহ 💙<<≈≈≈≈💞" , "🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 - 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥...🥺 .💥🐰🙂
—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "⚰️Kiss me") || (event.body.toLowerCase() == "⚰️kiss me")) {
         return api.sendMessage("ইনবক্সে আসো চুম্মা দিয়া তোমার পুক্কি লাল করে দিম😏 :))", threadID);
       };

        if ((event.body.toLowerCase() == "⚰️Call me") || (event.body.toLowerCase() == "⚰️call me")) {
         return api.sendMessage("audio call 500+ Video call 1000+ ok🍆😩<3", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️Eta kar bot") || (event.body.toLowerCase() == "⚰️এটা কার বট")) {
         return api.sendMessage("তোমার নানার বট এটা😑", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️bot koi") || (event.body.toLowerCase() == "⚰️Bot koi")) {
         return api.sendMessage("তোমার নানির চিপাই😑", threadID);
       };

       if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
         return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
       };

      if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
         return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "clmm bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️bot cc")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️cc bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
         return api.sendMessage("️ that's very commendable hihi :>", threadID);
       };

       if ((event.body.toLowerCase() == "dm bot")) {
         return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
       };

       if ((event.body.toLowerCase() == "nobody loves me")) {
         return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
         return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
       };

       if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
         return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
       };

       if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
         return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "⚰️does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "⚰️oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "⚰️cup") || (event.body.toLowerCase() == "⚰️চুপ")) {
     return api.sendMessage("️Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "⚰️off") || (event.body.toLowerCase() == "⚰️left")) {
     return api.sendMessage("️😑 নবিন পোলাপান এলাও নাই🐸", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Tomar name ki") || (event.body.toLowerCase() == "⚰️নাম কি তোমার")) {
     return api.sendMessage("️ নাম যায় না কি করবি আমি সানি লিওনের ক্যামেরা ম্যান এইটুকু জেনে রাখ ☹️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Inbox") || (event.body.toLowerCase() == "⚰️ইনবক্সে")) {
     return api.sendMessage("️🐸ষ্যার আপনার ইনবক্সে গালি দিসি চেক দিয়েন😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️hmm") || (event.body.toLowerCase() == "⚰️Hmm")) {
     return api.sendMessage("️🙄হুম চুদাস না মাথা এমনিতেই গরম আছে🍆", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Good morning") || (event.body.toLowerCase() == "⚰️Gd M9") || (event.body.toLowerCase() == "⚰️good morning")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Good night") || (event.body.toLowerCase() == "⚰️Gd N8") || (event.body.toLowerCase() == "⚰️good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Bro")) {
     return api.sendMessage("️🤨আমি ব্রা বিক্রি করিনা এখন🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️By")) {
     return api.sendMessage("️💋আপনে আসতে পারের ধন্যবাশ😩", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "⚰️Tnx") || (event.body.toLowerCase() == "⚰️ধন্যবাদ")) {
     return api.sendMessage("️মানুষ৷ মাত্রই ভুল ক্ষমা চায়ার মাইরে সালাম 😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "⚰️Call dao")) {
     return api.sendMessage("️অডিও কল ৫০০+ ভিডিও কল ১০০০ ওকে😏", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "⚰️out")) {
     return api.sendMessage("🤘খেলার আগেই আউট হলে তোমার বউ থাকবনা🤦‍♂️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Sorry") || (event.body.toLowerCase() == "⚰️সরি")) {
     return api.sendMessage("️👁️ সরি ৬দার সমাই নাই ওখে😏 ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️hi") || (event.body.toLowerCase() == "⚰️হাই") || (event.body.toLowerCase() == "⚰️Hi")) {
     return api.sendMessage("️🥺 হাই হ্যালো না করে দিনে কয়বার🤚 মারো ওইটা বলো 😗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "⚰️hello") || (event.body.toLowerCase() == "⚰️Hlw")) {
     return api.sendMessage("️🙁ভাত পাইনা খাইতে হ্যালো চুদাই রাইতে🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "⚰️Oh") || (event.body.toLowerCase() == "⚰️ohh")) {
     return api.sendMessage("🤧সবকিছু বুঝতে পারি কিন্তু এই ওহ পরে কি যে বলব এটাই বুঝতে পারিনা 😔.", threadID, messageID);
   };

  if (event.body.indexOf(".") == 0 || (event.body.toLowerCase() == "/") || (event.body.indexOf("-") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
