const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'RINTISAJA',
}

global.owner = ['62882016646288']
global.premium = ['62882016646288']
global.packname = 'wz mastah'
global.author = 'Wa : https://wa.me/62882016646288\nYT : SKAYLESGAMING×\nIG : wz_store12\nGH : wzBotz\nTT : wz_store12'
global.sessionName = 'wzbot'
global.namabotnya = 'WzBotz'
global.namaownernya = 'WzStore'
global.lolkey = 'RINTISAJA'
global.wame = 'https://wa.me/62882016646288'
global.gcwzbot = 'https://chat.whatsapp.com/L1xzgFdSo3JFu8yXeTtrbM'
global.ownerNumber = ["62882016646288@s.whatsapp.net"]
global.email = 'gamingwan92@gmail.com'
global.yt = 'https://youtube.com/channel/UCsQHOaoM4b1ta7bZVLvc_Pg'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    banned: 'Maaf Kamu Sudah Di Banned Silahkan Chat Owner Untuk Membuka Banned Nya',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
