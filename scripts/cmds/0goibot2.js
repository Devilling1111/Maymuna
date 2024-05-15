
const axios = require("axios");

module.exports = {
  config: {
    name: 'mim',
    version: '1.2',
    author: 'RB-BADOL-KHAN',
    countDown: 0,
    role: 0,
    shortDescription: 'mim ChatBot by Simsimi.fun',
    longDescription: {
      en: 'Chat with mim',
      ph: 'Kausapin si mim'
    },
    category: 'sim',
    guide: {
      en: '   {pn} mim <word>: chat with mim'
        + '\n   Example: {pn} mim hi',
      ph: '   {pn} mim <salita>: makipag-chat kay mim'
        + '\n   Halimbawa: {pn} mim kamusta'
    }
  },

  langs: {
    en: {
      chatting: 'Already chatting with bby...',
      error: 'UNeXPECTED ERROR - 404⚠?'
    },
    ph: {
      chatting: '🐸hmm bolo suna🍆...',
      error: 'Ano?'
    }
  },

  onStart: async function ({ args, message, event, getLang }) {
    if (args[0] === '-' && args[1]) {
      const userLangCode = this.detectLanguage(args.slice(2));
      const yourMessage = args.slice(2).join(" ");

      try {
        const responseMessage = await this.getMessage(yourMessage, userLangCode);
        return message.reply(responseMessage);
      } catch (err) {
        console.error('Error during onStart:', err);
        return message.reply(getLang("error"));
      }
    }
  },

  onChat: async function ({ args, message, event, getLang }) {
    if (args[0].trim().toLowerCase().startsWith('mim') && args.length > 1) {
      const userLangCode = this.detectLanguage(args.slice(1));

      try {
        const responseMessage = await this.getMessage(args.slice(1).join(" "), userLangCode);
