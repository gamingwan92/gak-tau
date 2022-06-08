exports.tampilan = (ya, pushname, sender, isPrem, role, elit, namaownernya, namabotnya, runtime, tanggal, wib, wit, wita) => {
return `──────〇『 Info User 』
➥ Nama User : ${pushname}
➥ Nomor User : ${sender.split("@")[0]}
➥ User Premium : ${isPrem ? 'I͎y͎a͎' : 'T͎i͎d͎a͎k͎'}
➥ Rank : ${role}
➥ Status : ${elit}
─〇
──────〇『 Info Bot 』
➥ Nama Owner : ${namaownernya}
➥ Nama Bot : ${namabotnya}
➥ User Bot : ${Object.keys(global.db.data.users).length} User
➥ Runtime Bot : ${runtime(process.uptime())}
➥ Library : Baileys Multi Device
➥ Tanggal : ${tanggal}
➥ Wib : ${wib}
➥ Wit : ${wit}
➥ Wita : ${wita}
─〇`}