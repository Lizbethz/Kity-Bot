const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let handler  = async (m, { conn, usedPrefix, command }) => {
const bot = global.db.data.bot[conn.user.jid] || {}
const chats = bot.chats || {}
const privs = chats.privs || {}
const groups = chats.groups || {}
const chat = m.isGroup ? groups[m.chat] || {} : privs[m.chats] || {}
if (!chat.modohorny && m.isGroup) {return conn.sendWritingText(m.chat, '*[ ⚠️ ] LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMINISTRADOR DE ESTE GRUPO Y DESEA ACTIVARLOS ESCRIBA #enable modohorny*', m)
} else {
let res = await pickRandom(asupan)
let resp = '*DISFRUTA DEL VIDEO 🥵*'
let q = await conn.sendMessage(m.chat, { image: {url: res}, caption: resp.trim(), mentions: conn.parseMention(resp), viewOnce: true }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(1 * 2000)
return conn.sendWritingText(m.chat, resp, q)
}
}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^videoxxx|vídeoxxx$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://l.top4top.io/m_2235dduf01.mp4",
"https://a.top4top.io/m_2235268m61.mp4",
"https://b.top4top.io/m_2235k7hze2.mp4",
"https://c.top4top.io/m_2235lxohb3.mp4",
"https://d.top4top.io/m_2235jwd2e4.mp4",
"https://e.top4top.io/m_2235h5b1z5.mp4",
"https://f.top4top.io/m_2235gihcu6.mp4",
"https://l.top4top.io/m_2235dp7m41.mp4",
"https://a.top4top.io/m_2235zxue82.mp4",
"https://b.top4top.io/m_2235m3bhf3.mp4",
"https://c.top4top.io/m_2235vjyio4.mp4",
"https://d.top4top.io/m_2235m9tdu5.mp4",
"https://e.top4top.io/m_2235y2kon6.mp4",
"https://f.top4top.io/m_2235rhid57.mp4",
"https://g.top4top.io/m_2235zgsqf8.mp4",
"https://i.top4top.io/m_2235drxxg10.mp4",
"https://d.top4top.io/m_2235fzynm1.mp4",    
"https://e.top4top.io/m_22354t3zk2.mp4",
"https://f.top4top.io/m_2235gyxgh3.mp4",
"https://g.top4top.io/m_22357cmft4.mp4", 
"https://i.top4top.io/m_2235mcizm6.mp4",
"https://j.top4top.io/m_2235gwsn17.mp4",
"https://k.top4top.io/m_2235gzzjc8.mp4",
"https://a.top4top.io/m_2235l9y1310.mp4",  
"https://l.top4top.io/m_2235r1opz1.mp4",    
"https://a.top4top.io/m_22358cuuu2.mp4",
"https://b.top4top.io/m_22350c9br3.mp4",
"https://c.top4top.io/m_22355p2js4.mp4",  
"https://d.top4top.io/m_2235lv7415.mp4",
"https://e.top4top.io/m_2235q8z3f6.mp4",     
"https://b.top4top.io/m_22358oas31.mp4",
"https://c.top4top.io/m_2235xg7o62.mp4",
"https://d.top4top.io/m_2235ut91p3.mp4",
"https://e.top4top.io/m_22352ktoj4.mp4",
"https://f.top4top.io/m_2235hcqj65.mp4",
"https://g.top4top.io/m_2235j81s76.mp4", 
"https://d.top4top.io/m_2235993nu1.mp4",
"https://c.top4top.io/m_22352lrsd1.mp4",
"https://g.top4top.io/m_2235pi8791.mp4",
"https://g.top4top.io/m_22428pnh01.mp4",
"https://i.top4top.io/m_2242jpc3c1.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4"
]