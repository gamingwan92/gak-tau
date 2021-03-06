require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const hxz = require('hxz-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Lib/myfunc')
const { pinterest } = require('./Lib/scraper')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./Lib/rpg')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./Lib/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./Lib/limit')

const _level = JSON.parse(fs.readFileSync('./Database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./Database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./Database/balance.json'))

module.exports = kirbotz = async (kirbotz, m, chatUpdate, store) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix
        var content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kirbotz.decodeJid(kirbotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')     
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
	    
	    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kirbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPetualang = checkPetualangUser(sender)
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `I???m From Indonesia ????????`,jpegThumbnail: thumb}}}
        
var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['????','????','????','????','????','????','????','????','????','????','????']
var hewan = ['????','????','????','????','????','????','????','????']
var burung = ['????','????','????','????','????','????','????','????','????','????']        
var petnya = ['????','????','????','????','????']
var makan = ['????','????','????','????','????','????','????','????','????','????','????']
var buahan = ['????','????','????','????','????','????','????','????','????']

var elit = 'Petualang Biasa'
if (isPremium)
{
elit = 'Petualang Pro'
}
if (isCreator)
{
elit = 'Admin Game'
}

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
           
} catch (err) {
console.error(err)
}

            if (!kirbotz.public) {
            if (!m.key.fromMe) return
            }
            if (m.message) {
            kirbotz.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            }
            setInterval(() => {
            fs.writeFileSync('./Database/database.json', JSON.stringify(global.db, null, 2))
            }, 60 * 1000)
            let cron = require('node-cron')
            cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
            }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
            })
            
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kirbotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kirbotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kirbotz.ev.emit('messages.upsert', msg)
        }
        
        const reply = (teks) => {
	    kirbotz.sendMessage(from, { text: teks }, { quoted: m })
		}
		
		const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}   
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	   
        async function sendPlay(from, query) {
        var url = await yts(query)
        url = url.videos[0].url
        hxz.youtube(url).then(async(data) => {
        var button = [
		{ urlButton: { displayText: `??? S O U R C E V I D I O ???`, url : ` https://youtu.be/${data.id}` } },
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `???? Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		{ quickReplyButton: { displayText: `???? Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
		{ quickReplyButton: { displayText: `???? Search ${data.title}`, id: `${prefix}ytsearch https://youtu.be/${data.id}` } }
		]
        var hg = `*?????? Title :* ${data.title}\n*?????? Quality :* ${data.quality}`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: button, footer: `Pilih Salah Satu Button Dibawah??????`, mentions: [sender] })
        }).catch((e) => {
        kirbotz.sendMessage(from, { text: mess.error }, { quoted: m })
        ownerNumber.map( i => kirbotz.sendMessage(from, { text: `Send Play Error : ${e}` }))
        })
        }
        
        async function sendButLoc(from) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `???? ???????????????????????????? ????????????????????????
 ??? Nama : ${pushname}
 ??? Rank : ${role}
 ??? Status : ${elit}
 ??? Uang : $${(getBalance(sender, balance))}
 ??? Xp : ${getLevelingXp(sender)}/${reqXp}
 ??? Level : ${getLevelingLevel(sender)}
 
???? ???????????????????????????????????? :
 ??? Uang : $${(getBalance(sender, balance))}
 ??? Emas : ${getEmas(sender)}
 ??? Besi : ${getBesi(sender)}
 ??? Ikan : ${getFish(sender)}
 ??? Berlian : ${getDm(sender)}

??????? ???????????????? ????????????
 ?? ${prefix}joinrpg
 ?? ${prefix}quest 
 ?? ${prefix}mining
 ?? ${prefix}mancing
 ?? ${prefix}luckyday
 ?? ${prefix}luckytime
 ?? ${prefix}adventure
 ?? ${prefix}inventori
 
?????? ???????????????????????????? ????????????
 ?? ${prefix}killslime
 ?? ${prefix}killgoblin
 ?? ${prefix}killdevil
 ?? ${prefix}killbehemoth
 ?? ${prefix}killdemon
 ?? ${prefix}killdemonking 
 
???? ???????????????? ????????????????????????????????????
 ?? ${prefix}sellikan
 ?? ${prefix}sellbesi
 ?? ${prefix}sellemas
 ?? ${prefix}selldiamond`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: thumbrpg }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButJoin(from, query) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        _petualang.push(sender)
        fs.writeFileSync('./Database/inventori.json', JSON.stringify(_petualang))        
        addInventori(sender)
        addLevelingId(sender) 
        var name = args[0]
        var serialUser = createSerial(14)
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `??? SUKSES JOIN RPG ???
        
??? PROFILE ???
 ??? Nama : ${name}
 ??? Level : ${getLevelingLevel(sender)}
 ??? Status : ${elit}
 ??? Xp :  ${getLevelingXp(sender)}/${reqXp}
??? RPG GAME ???`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgjoinrpg }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `?????? ???????????????? ???????????????????????????????? ???????????????????????\n\n???? Hadiah Membunuh Slime\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgslime }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButgoblin(from) {
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `?????? ???????????????? ???????????????????????????????? ????????????????????????\n\n???? Hadiah Membunuh Goblin\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imggoblin }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdevil(from) {
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `?????? ???????????????? ???????????????????????????????? ???????????????????????\n\n???? Hadiah Membunuh Devil\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdevil }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButbehemoth(from) {
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `?????? ???????????????? ???????????????????????????????? ???????????????????????????????????\n\n???? Hadiah Membunuh Behemoth\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgbehemoth }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemon(from) {
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `?????? ???????????????? ???????????????????????????????? ???????????????????????\n\n???? Hadiah Membunuh Demond\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemon }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemonking(from) {
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `?????? ???????????????? ???????????????????????????????? ????????????????????????????????????\n\n???? Hadiah Membunuh DemonKing\n ??? Uang : $${b}\n ??? Besi : ${c}\n ??? Emas : ${a}\n ??? Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemonking }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText: `RULES`, id : 'rules'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By KirBotz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `YouTube`, url : `${yt}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By KirBotz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }
                
async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "MyOwner????","url": `https://wa.me/62882016646288`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donasi'}},
{"quickReplyButton": {"displayText": "Status Bot KirBotz","id": 'ping'}}
		]
kirbotz.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumb }, templateButtons: button, footer: `Created By WZ BOT OFFICIAL`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
                
switch (command) {
case 'creator': case 'owner': {
let vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${namaownernya}.;;;`
+ `FN:${namaownernya}.\n`
+ `ORG:${namaownernya};\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ `item1.X-ABLabel:??? Creator\n`
+ `item4.X-ABLabel:?????? Indonesia\n`
+ `item5.X-ABLabel:??? KirBotz\n`
+ `END:VCARD`
let kir = await kirbotz.sendMessage(m.chat, { contacts: { displayName: `${namaownernya}`, contacts: [{ vcard }] } }, { quoted: m })
await replyOwnerr(`Ituh Ownerku Kak >_<`)
}
break
case 'credits':
const sokl = "62882016646288@s.whatsapp.net"
const sokr = "6283127014833@s.whatsapp.net"
const sokt = "62881036690566@s.whatsapp.net"
teksits = `??? *Thanks To* ???
??? Wz store @${sokl.split("@")[0]}
??? Zakky @${sokt.split("@")[0]}`
kirbotz.sendMessage(m.chat, { image: thumb, caption: teksits, contextInfo: {"mentionedJid": [sokl, sokr, sokt]} }, { quoted: m })
break
case 'quest':
let sectionnya= [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Rpg Game By KirBotz ", sectionnya, { quoted: m})
break
case 'slime':
case 'killslime':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButslime(from)
break
case 'goblin':
case 'killgoblin':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButgoblin(from)
break
case 'devil':
case 'killdevil':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButdevil(from)
break
case 'behemoth':
case 'killbehemoth':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButbehemoth(from)
break
case 'demon':
case 'killdemon':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButdemon(from)
break
case 'demonking':
case 'killdemonking':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButdemonking(from)
break
case 'welcome': {
await replyTemplate(`Welcome Kak\nJangan Lupa Baca Deskripsi\nPatuhi Rules Bot!!!`)
}
break
case 'bye': {
await replyTemplate(`Awogwogwog Anak Kontol Baru Aja Keluar????`)
}
break
case 'groupkirbotz': {
await replyTemplate(`${gckirbotz}\nGak Join Awas Di Ban Kau`)
}
break
case 'menu':
let timestamp = speed()
let latensi = speed() - timestamp
await kirbotz.send5ButGif(from, `???????????????????????? ${ya}Info User${ya} ???
??? ${ya}Nama User${ya} : ${pushname}
??? ${ya}Nomor User${ya} : ${sender.split("@")[0]}
??? ${ya}Rank${ya} : ${role}
??? ${ya}Status${ya} : ${elit}
??????
???????????????????????? ${ya}Info Bot${ya} ???
??? ${ya}Nama Owner${ya} : ${namaownernya}
??? ${ya}Nama Bot${ya} : ${namabotnya}
??? ${ya}User Bot${ya} : ${Object.keys(global.db.data.users).length} User
??? ${ya}Runtime Bot${ya} : ${runtime(process.uptime())}
??? ${ya}Speed Bot${ya} : ${latensi.toFixed(4)} _Detik_
??? ${ya}Library${ya} : Baileys Multi Device
??? ${ya}Tanggal${ya} : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
??? ${ya}Wib${ya} : ${wib}
??? ${ya}Wit${ya} : ${wit}
??? ${ya}Wita${ya} : ${wita}
??????` , `Created By WZ BOT OFFICIAL`, [
{"urlButton": {"displayText": "MyOwner????","url": `https://wa.me/62882016646288`}},
{"quickReplyButton": {"displayText": "Menu Rpg","id": 'rpgmenu'}},
{"quickReplyButton": {"displayText": "Menu Biasa","id": 'menubiasa'}},
{"quickReplyButton": {"displayText": "Rules Bot","id": 'rules'}}] )
break
case 'menubiasa':{
await sendBut5nya(`???????????? ${ya}Owner Menu${ya} ???
??? ${ya}$${ya}
??? ${ya}>${ya}
??? ${ya}${prefix}join${ya}
??? ${ya}${prefix}public${ya}
??? ${ya}${prefix}self${ya}
??? ${ya}${prefix}bcall${ya}
??? ${ya}${prefix}bcaudio${ya}
??? ${ya}${prefix}bcvidio${ya}
??? ${ya}${prefix}bcimg${ya}
?????????????????????
???????????? ${ya}Other Menu${ya} ???
??? ${ya}${prefix}owner${ya}
??? ${ya}${prefix}credits${ya}
??? ${ya}${prefix}groupkirbotz${ya}
??? ${ya}${prefix}rules${ya}
??? ${ya}${prefix}donasi${ya}
??? ${ya}${prefix}sewabot${ya}
??? ${ya}${prefix}sticker${ya}
??? ${ya}${prefix}attp${ya}
??? ${ya}${prefix}ttp${ya}
??? ${ya}${prefix}toimg${ya}
??? ${ya}${prefix}ssweb${ya}
??? ${ya}${prefix}emojimix${ya}
??? ${ya}${prefix}cerpen${ya}
??? ${ya}${prefix}ceritahoror${ya}
??? ${ya}${prefix}faktaunik${ya}
??? ${ya}${prefix}katabijak${ya}
??? ${ya}${prefix}pantun${ya}
??? ${ya}${prefix}bucin${ya}
??? ${ya}${prefix}pinterest${ya}
??? ${ya}${prefix}ppcouple${ya}
??? ${ya}${prefix}cecan${ya}
??? ${ya}${prefix}cogan${ya}
??? ${ya}${prefix}art${ya}
??? ${ya}${prefix}bts${ya}
??? ${ya}${prefix}exo${ya}
??? ${ya}${prefix}elf${ya}
??? ${ya}${prefix}neko${ya}
??? ${ya}${prefix}shota${ya}
??? ${ya}${prefix}sagiri${ya}
??? ${ya}${prefix}shinobu${ya}
??? ${ya}${prefix}megumin${ya}
??? ${ya}${prefix}wallnime${ya}
??? ${ya}${prefix}anime${ya}
??? ${ya}${prefix}nhentai${ya}
??? ${ya}${prefix}halah${ya}
??? ${ya}${prefix}hilih${ya}
??? ${ya}${prefix}huluh${ya}
??? ${ya}${prefix}heleh${ya}
??? ${ya}${prefix}holoh${ya}
?????????????????????
???????????? ${ya}Group Menu${ya} ???
??? ${ya}${prefix}linkgroup${ya}
??? ${ya}${prefix}antilink <on/off>${ya}
??? ${ya}${prefix}group <open>${ya}
??? ${ya}${prefix}group <close>${ya}
??? ${ya}${prefix}add 628????????${ya}
??? ${ya}${prefix}kick @tag${ya}
??? ${ya}${prefix}tagall <teks>${ya}
??? ${ya}${prefix}hidetag <teks>${ya}
??? ${ya}${prefix}promote @tag${ya}
??? ${ya}${prefix}demote @tag${ya}
??? ${ya}${prefix}setppgc <reply foto>${ya}
??? ${ya}${prefix}setname <name>${ya}
??? ${ya}${prefix}setdesc <teks>${ya}
??? ${ya}${prefix}jadian${ya}
?????????????????????
???????????? ${ya}Download Menu${ya} ???
??? ${ya}${prefix}play <query>${ya}
??? ${ya}${prefix}ytmp4 <link>${ya}
??? ${ya}${prefix}ytmp3 <link>${ya}
??? ${ya}${prefix}tiktoknowm <link>${ya}
??? ${ya}${prefix}tiktokaudio <link>${ya}
??? ${ya}${prefix}igvideo <link>${ya}
??? ${ya}${prefix}igfoto <link>${ya}
??? ${ya}${prefix}ytsearch <query>${ya}
??? ${ya}${prefix}tiktokstalk <nama tiktok>${ya}
??? ${ya}${prefix}githubstalk <nama github>${ya}
??? ${ya}${prefix}igstalk <nama ig>${ya}
??? ${ya}${prefix}ytstalk <nama yt>${ya}
?????????????????????
???????????? ${ya}Islam Menu${ya} ???
??? ${ya}${prefix}asmaulhusna${ya}
??? ${ya}${prefix}iqra${ya}
??? ${ya}${prefix}hadist${ya}
??? ${ya}${prefix}juzamma${ya}
??? ${ya}${prefix}listsurah${ya}
??? ${ya}${prefix}jadwalsholat${ya}
??? ${ya}${prefix}kisahnabi${ya}
??? ${ya}${prefix}tafsirsurah${ya}
?????????????????????
???????????? ${ya}Logo Menu${ya} ???
??? ${ya}${prefix}shadow${ya}
??? ${ya}${prefix}cup${ya}
??? ${ya}${prefix}cup1${ya}
??? ${ya}${prefix}romance${ya}
??? ${ya}${prefix}smoke${ya}
??? ${ya}${prefix}burnpaper${ya}
??? ${ya}${prefix}lovemessage${ya}
??? ${ya}${prefix}undergrass${ya}
??? ${ya}${prefix}love${ya}
??? ${ya}${prefix}coffe${ya}
??? ${ya}${prefix}woodheart${ya}
??? ${ya}${prefix}woodenboard${ya}
??? ${ya}${prefix}summer3d${ya}
??? ${ya}${prefix}wolfmetal${ya}
??? ${ya}${prefix}nature3d${ya}
??? ${ya}${prefix}underwater${ya}
??? ${ya}${prefix}golderrose${ya}
??? ${ya}${prefix}summernature${ya}
??? ${ya}${prefix}letterleaves${ya}
??? ${ya}${prefix}glowingneon${ya}
??? ${ya}${prefix}fallleaves${ya}
??? ${ya}${prefix}flamming${ya}
??? ${ya}${prefix}harrypotter${ya}
??? ${ya}${prefix}carvedwood${ya}
??? ${ya}${prefix}tiktokmaker${ya}
??? ${ya}${prefix}arcade8bit${ya}
??? ${ya}${prefix}battlefield4${ya}
??? ${ya}${prefix}pubg${ya}
??? ${ya}${prefix}pornhub${ya}
??? ${ya}${prefix}glitch${ya}
??? ${ya}${prefix}avenger${ya}
??? ${ya}${prefix}space${ya}
??? ${ya}${prefix}ninjalogo${ya}
??? ${ya}${prefix}marvelstudio${ya}
??? ${ya}${prefix}lionlogo${ya}
??? ${ya}${prefix}wolflogo${ya}
??? ${ya}${prefix}steel3d${ya}
??? ${ya}${prefix}wallgravity${ya}
??? ${ya}${prefix}coolgravity${ya}
??? ${ya}${prefix}wetglass${ya}
??? ${ya}${prefix}multicolor3d${ya}
??? ${ya}${prefix}watercolor${ya}
??? ${ya}${prefix}luxurygold${ya}
??? ${ya}${prefix}galaxywallpaper${ya}
??? ${ya}${prefix}lighttext${ya}
??? ${ya}${prefix}beautifulflower${ya}
??? ${ya}${prefix}puppycute${ya}
??? ${ya}${prefix}royaltext${ya}
??? ${ya}${prefix}heartshaped${ya}
??? ${ya}${prefix}birthdaycake${ya}
??? ${ya}${prefix}galaxystyle${ya}
??? ${ya}${prefix}hologram3d${ya}
??? ${ya}${prefix}greenneon${ya}
??? ${ya}${prefix}glossychrome${ya}
??? ${ya}${prefix}greenbush${ya}
??? ${ya}${prefix}metallogo${ya}
??? ${ya}${prefix}noeltext${ya}
??? ${ya}${prefix}glittergold${ya}
??? ${ya}${prefix}textcake${ya}
??? ${ya}${prefix}starsnight${ya}
??? ${ya}${prefix}wooden3d${ya}
??? ${ya}${prefix}textbyname${ya}
??? ${ya}${prefix}writegalacy${ya}
??? ${ya}${prefix}galaxybat${ya}
??? ${ya}${prefix}snow3d${ya}
??? ${ya}${prefix}birthdayday${ya}
??? ${ya}${prefix}goldplaybutton${ya}
??? ${ya}${prefix}silverplaybutton${ya}
??? ${ya}${prefix}freefire${ya}
??? ${ya}${prefix}blackpink${ya}
??? ${ya}${prefix}neon${ya}
??? ${ya}${prefix}greenneon${ya}
??? ${ya}${prefix}advanceglow${ya}
??? ${ya}${prefix}futureneon${ya}
??? ${ya}${prefix}sandwriting${ya}
??? ${ya}${prefix}sandsummer${ya}
??? ${ya}${prefix}sandengraved${ya}
??? ${ya}${prefix}metaldark${ya}
??? ${ya}${prefix}neonlight${ya}
??? ${ya}${prefix}holographic${ya}
??? ${ya}${prefix}text1917${ya}
??? ${ya}${prefix}minion${ya}
??? ${ya}${prefix}deluxesilver${ya}
??? ${ya}${prefix}newyearcard${ya}
??? ${ya}${prefix}bloodfrosted${ya}
??? ${ya}${prefix}halloween${ya}
??? ${ya}${prefix}jokerlogo${ya}
??? ${ya}${prefix}fireworksparkle${ya}
??? ${ya}${prefix}natureleaves${ya}
??? ${ya}${prefix}bokeh${ya}
??? ${ya}${prefix}toxic${ya}
??? ${ya}${prefix}strawberry${ya}
??? ${ya}${prefix}box3d${ya}
??? ${ya}${prefix}roadwarning${ya}
??? ${ya}${prefix}breakwall${ya}
??? ${ya}${prefix}icecold${ya}
??? ${ya}${prefix}luxury${ya}
??? ${ya}${prefix}cloud${ya}
??? ${ya}${prefix}summersand${ya}
??? ${ya}${prefix}horrorblood${ya}
??? ${ya}${prefix}thunder${ya}
?????????????????????
???????????? ${ya}Random Video${ya} ???
??? ${ya}${prefix}storyanime${ya}
??? ${ya}${prefix}asupan${ya}
??? ${ya}${prefix}asupansantuy${ya}
??? ${ya}${prefix}asupanbocil${ya}
??? ${ya}${prefix}asupanukhty${ya}
??? ${ya}${prefix}asupanrikagusriani${ya}
??? ${ya}${prefix}asupanghea${ya}
?????????????????????`)}
break
case 'tes':{
let btn = [{
urlButton: {
displayText: 'Group Bot',
url: `${gckirbotz}`
}
}]
kirbotz.send5Loc(m.chat, `On Kak Silahkan Pencet Button Di Bawah\nJika Button Tidak Kelihatan Ketik ${prefix}menu`, `Created By WZ BOT OFFICIAL`, global.thumb, btn)
}
break
case 'userkirbotz':{
reply(`*${Object.keys(global.db.data.users).length} User*`)
}
break
case 'rules': {
ules = `${ucapanWaktu} ???????????? *${pushname}*
???? ???????????????????? ????????????????
????? 1. ???????????????????????? ???????????????? ????????????????
      *s????????s?? : ??????????/s???????? ?????????????*
????? 2. ???????????????????????? ???????????????????????????? ????????????????
      *s????????s?? : s???????? ?????????????*
????? 3. ???????????????????????? ???????????????????????????? ????????????????
      *s????????s?? : ????????????? ?????????????????????*

???? ???????????????????? ???????????????? ??????
_*https://wa.me/62882016646288*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ules,
hydratedFooterText: 'Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Yaa, Lapor Owner Jika Perlu Atau Mendesak ????',
hydratedButtons: [{
urlButton: {
displayText: 'Owner Bot',
url: `${wame}`
}
},
{
urlButton: {
displayText: 'Script Bot',
url: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpc': {
            	if (!m.key.fromMe && !isCreator) return reply(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `??? *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `??? *Nama :* ${nama}\n??? *User :* @${i.split('@')[0]}\n??? *Chat :* https://wa.me/${i.split('@')[0]}\n\n????????????????????????????????????????????????????????????????????????\n\n`
                 }
                 kirbotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
if (!isCreator) throw mess.owner
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `Owner Bot`,
url: `${wame}`
}
},
{
quickReplyButton: {
displayText: 'List Menu',
id: 'menu'
}
}]
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
kirbotz.sendMessage(i, { sticker: { url: media } }, { quoted: m })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
kirbotz.send5ButImg(i, junn, `Created By WZ BOT OFFICIAL`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
kirbotz.send5Vid(i, junn, `Created By WZ BOT OFFICIAL`, buffer, butoon)
} else if (/audio/.test(mime)) {
kirbotz.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
} else {
reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
}
await fs.unlinkSync(media)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
break
case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Nomor Owner',
                                    phoneNumber: '62882016646288'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `??? Broadcast Bot ???\n\n${text}`
                      kirbotz.send5ButImg(yoi, txt, kirbotz.user.name, global.thumb, btn)
		}
		reply('Sukses Broadcast')
            }
            break
case 'asupan':
case 'asupansantuy':
case 'asupanbocil':
case 'asupanukhty':
case 'asupanrikagusriani':
case 'asupanghea':{
reply(mess.wait)
hasilnya = await getBuffer(`https://api.dapuhy.xyz/api/asupan/${command}?apikey=C6Oaxwtr9H`)
let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kirbotz.send5Vid(m.chat, `Nih Kak`, kirbotz.user.name, hasilnya, btn)
                      }
                      break
case 'storyanime':{
reply(mess.wait)
hasilnya = await getBuffer(`https://api.dapuhy.xyz/api/anime/storyanime?apikey=C6Oaxwtr9H`)
let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kirbotz.send5Vid(m.chat, `Nih Kak`, kirbotz.user.name, hasilnya, btn)
                      }
                      break
case 'public': {
if (!isCreator) throw mess.owner
kirbotz.public = true
reply('Sukse Kak')
}
break
case 'self': {
if (!isCreator) throw mess.owner
kirbotz.public = false
reply('Sukses Kak')
}
break
case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
reply(mess.wait)
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kirbotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'attp':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(mess.wait)
buffer = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
break
case 'ttp':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply (`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emojimix': {
if (!text) throw `Example : ${prefix + command} ????+????`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kirbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: get_result.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `??? *Tafsir Surah* ???

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
case 'cerpen':{
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Creator : ${get_result.creator}\n`
ini_txt += `Story :\n${get_result.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'asmaulhusna': {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':	
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kirbotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
reply(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
reply(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
reply(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
reply(mess.wait)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'nhentai':
if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
case 'anime':{
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             let message = await prepareWAMessageMedia({ image: thumbnail }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
break
case 'ceritahoror':{
reply(mess.wait)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Desc : ${get_result.desc}\n`
ini_txt += `Story :\n${get_result.story}\n`
buff = await getBuffer(get_result.thumbnail)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':{
if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
reply(mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':{
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks`)
reply(mess.wait)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{
if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktokmaker':{
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':{
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak ??????`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By WZ BOT OFFICIAL',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/gamingwan92'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/62882016646288'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'rpgmenu':
case 'profile':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (!m.isGroup) return reply(mess.group)  
if (isPetualang) return reply('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`)
await sendButJoin(from, q)
break
case 'mining':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt Sedang Menguli . . .')
setTimeout( () => {
buttons = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `Selesai Mining????\nlist hasil :\nEmas : ${emas}????\nUang : $${pp}????\nBesi : ${besi}??????\nBerlian : ${dm}????`, kirbotz.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '???? Selesai Menguli . . .????????' }, { quoted: m })
}, 7000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '???? Menemukan Emas . . .???????????????????' }, { quoted: m })
}, 4000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '???? Mulai Menambang . . .????????????????' }, { quoted: m })
}, 1500) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: mining }, {quoted: m}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttons = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `???? ???????????????????????????? ????????????????????????\n ??? Nama : ${pushname}\n ??? Rank : ${role}\n ??? Status : ${elit}\n ??? Xp : ${getLevelingXp(sender)}/${reqXp}\n ??? Level : ${getLevelingLevel(sender)}\n???? ???????????????????????????????????? :\n ??? Emas : ${getEmas(sender)}????\n ??? Uang : $${(getBalance(sender, balance))}????\n ??? Besi : ${getBesi(sender)}??????\n ??? Berlian : ${getDm(sender)}????\n ??? Ikan : ${getFish(sender)}????`, kirbotz.user.name, m)
break
case 'sellikan':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `???? ????????????????????\n ??? Penjual : ${pushname}\n ??? Pembeli : Admin\n ??? Harga/Ikan : 5\n ??? Status : Sukses\n ??? Sisa Ikan : ${getFish(sender)}\n ??? Hasil Penjualan : $${rp}`,  kirbotz.user.name, m)
break
case 'sellbesi':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `???? ????????????????????\n ??? Penjual : ${pushname}\n ??? Pembeli : Admin\n ??? Harga/Besi : 10\n ??? Status : Sukses\n ??? Sisa Besi : ${getBesi(sender)}\n ??? Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break
case 'sellemas':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `???? ????????????????????\n ??? Penjual : ${pushname}\n ??? Pembeli : Admin\n ??? Harga/Emas : 25\n ??? Status : Sukses\n ??? Sisa Emas : ${getEmas(sender)}\n ??? Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break 
case 'selldiamond':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balan