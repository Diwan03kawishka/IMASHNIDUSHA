const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'number ?(.*)', fromMe: false, desc: 'diwan number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:DIWAN KAWISHKA\n' // full name
            + 'ORG:DIWAN(BHAGYA);\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94786705379:+94 786705379\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "DIWAN KAWISHKA", vcard: vcard}, MessageType.contact)
}))
