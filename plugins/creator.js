let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6285924341386@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6285349896689', 'anfebnBotz', m)
  this.sendContact(m.chat, '6285924341386', 'Owner  AnfebnBotz:)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
