let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana [087772343860]
│ • Qris [Chat Owner]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287772343860
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
