const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-RAIDER' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JIY3F4Zi9iRkIwbHV4eDQ1dFVLeDFNVWxYaDRzaFJFczRyRTdaaTJGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlRvL2hqYUMzYlpOZkJmRUxZcmgrOTh4NW5jQVdJc3ozODlwamw4d0YzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR0VabURFNGdKWXcway9IMmYzbGVwQjRUM0MzbHBxRGRTSjJJS3k0U0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYc3MzcDNIQmgrZDZEdU0vOGNoV1h6eERQNE5NczNHWjZVMld5SG1NU0hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLN09oNTFRTklHWUl6N2FUSml1MFBCSjhadjZYN2ZxUXZUdy9jdWRVMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJtVWNzTXFCeDFNWWhKaURsd1RSNUw5dXRwNGM1YWRxc0tJU0ExU3ZybEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tEbllXRDN0UEptS2IyZmlkMTVqemxKWlJhc0M3QWxNQUZrcURlUEMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5TTVhyaHRFK2E4dDljWlJJTkxvYnUzTGV0V0lvalY5UGhCVHNWdTRHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZZZGhxK0I2ZUFkVkJmWEtaRVFqdVl1LzlkMmptMCtMQ053eFR4N1VsdjNFYVdWZVB1Tmpmc0hsRlZEd1hGMGFUL0N5TzI2TVlTeUtjbytwbStnNkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IjBTSXIrR1FnUXpyTlMwNFdlMXRRaXhWOHc5VXpTRkxaNHRUaExxb0YyMUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikhsbm01VTBPUlRxanQ0QVVfbEx4RlEiLCJwaG9uZUlkIjoiNzJiYjlkMmQtOTVkOC00YWE0LTg2ZDItODkwN2NkNTI4M2QzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJuUWZXZS8yNFlEOFBycWRtU2YyWk92bFM2dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRHVSclY0YVF0RUloMjhudGVGaml1cHllR289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUVZTkQ0M0UiLCJtZSI6eyJpZCI6IjIzNDcwNzM3NjYwODk6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lQXdHb1EzTTNtdEFZWUNTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdGUnJZSStvR05Rdkw2bkNIekl2Qy9GbjV2STdEOXlsS2tncnZWZGpiVE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkIxRy9RQys1UWVjdDZlalQxblBwa1lRSld4bTRVTFhqLzc2Zm5oZEYxVlN2VWZxNjFrb2UwZXBXczNRTE5NRTI2WWVDN2UwRWRXUWZnR3oxcjg3bUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1Q2lRaW1JSHVZelBGb0NxYkV3NnpHZEEwNDFVOWx4QXJQUjNEZmR1RnFqTWxtNXFHK3hQSFptalgrWjBEaEhjTTN2dkRjV0VDMEZ3em05MHV0ajlBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNzM3NjYwODk6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmhVYTJDUHFCalVMeStwd2g4eUx3dnhaK2J5T3cvY3BTcElLNzFYWTIweiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTM0NTc2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSUsifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
