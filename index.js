                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               /* 
  @ EDIT WELCOME DI MAIN.JS (BUAT BACKGROUND SENDIRI)
  @ GAK SUB = EROR
  @ CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA  || SUBSCRIBE FOR MORE UPDATE
  @ EDIT SEMUANYA DI SETTING.JSON
  @ ADA FITUR YG BELUM SEMPAT GUA FIX GARA² SINYAL LEMOT
  @ KLO NGEDIT YG TELITI SAYANG, EROR? DOWNLOAD ULANG SC NYA 
  @ BUGGC WORK DI BAILEYS 3.4.1 JADI UPGRADE AJA
  @ GK SEMUA FITUR WORK PASTI ADA YG EROR (KADANG WORK KADANG ERROR)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
   
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
//const zrapi = require("zrapi")
const { help, convert, funmenu, download, maker, telestiker, other, ownermenu, set_stc_cmd, storage, cecanmenu, tag, upmenu, nsfw, asupan, allmenu} = require('./zeeone/zeeoneofc')
//const { help, convert, download, maker, other} = require('./zeeone/zeeoneofc')

var creatorList = ['𝘊𝘳𝘦𝘢𝘵𝘦𝘥 : © Loyo Grub', 'ᴹᴿ᭄Loyo Bitz×፝֟͜×', 'Loyo Bot' , ' 𝘈𝘭𝘱𝘩𝘢𝘣𝘰𝘵']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

/*set_sticker_command*/
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
/*set_sticker_command*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
prefix = '#'
banChats = true
offline = false
img = setting.img
baper = 'Follow Instagram _daaa_1'
apiku = 'api-alphabot.herokuapp.com'
targetpc = setting.ownerNumber
owner = targetpc
ownerr ='6281229859085'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = 'RulsBotz'
ownername = 'ArulGanz'
ownerNumberr = '6281229859085'
ownerNumber = '6281229859085'
cr = setting.cr
petik = '```'
titik =`...`
n ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
       // m = simple.smsg(alpha, mek)
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        //m = simple.smsg(alpha, mek)
        //let { mentionedd } = m
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { quotedMek, isQuotedMek, mentioned} = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo; 
        
          var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;     
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fs.readFileSync(`image/${thumbnail}`), contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${creator}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}    
////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return
		var _0x2363=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x2E\x6A\x70\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x69\x6D\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x6E\x75","\uD835\uDC0C\uD835\uDC04\uD835\uDC0D\uD835\uDC14","\x6F\x77\x6E\x65\x72","\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC04\uD835\uDC11","\x73\x74\x61\x74\x75\x73","\uD835\uDC01\uD835\uDC0E\uD835\uDC13\x20\uD835\uDC12\uD835\uDC13\uD835\uDC00\uD835\uDC13\uD835\uDC14\uD835\uDC12","\x48\x61\x6C\x6F\x20\x6B\x61\x6B\x20","\x20\x73\x61\x79\x61\x20\x61\x64\x61\x6C\x61\x68\x20\x62\x6F\x74\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x79\x61\x6E\x67\x20\x73\x69\x61\x70\x20\x6D\x65\x6D\x62\x61\x6E\x74\x75\x20\x6B\x6B","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x60\x60\x60\x4F\x57\x4E\x45\x52\x20\x4F\x4E\x4C\x59\x60\x60\x60","\x75\x70\x74\x69\x6D\x65","\u300C\x20\x2A\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\u300C\x20\x2A\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x36\x36\x36\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x6C\x6F\x67","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x65\x72\x72\x6F\x72","\x45\x72\x72\x6F\x72\x20\x3A\x20","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x2E\x2F","\x73\x65\x63\x6F\x6E\x64\x73","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x39\x39\x39\x2E\x77\x65\x62\x70","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x65\x6E\x64\x73\x57\x69\x74\x68","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x47\x61\x67\x61\x6C\x2C\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6D\x65\x6E\x67\x6B\x6F\x6E\x76\x65\x72\x73\x69\x20","\x20\x6B\x65\x20\x73\x74\x69\x6B\x65\x72","\x2E","\x73\x70\x6C\x69\x74","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74","\x4B\x69\x72\x69\x6D\x20\x67\x61\x6D\x62\x61\x72\x20\x64\x65\x6E\x67\x61\x6E\x20\x63\x61\x70\x74\x69\x6F\x6E\x20","\x73\x74\x69\x63\x6B\x65\x72\x5C\x6E\x44\x75\x72\x61\x73\x69\x20\x53\x74\x69\x63\x6B\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x31\x2D\x39\x20\x44\x65\x74\x69\x6B","\x52\x65\x70\x6C\x79\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x73\x74\x69\x6B\x65\x72\x20\x6E\x79\x61\x20\x6C\x6F\x72\x64\x21","\x60\x60\x60\x50\x52\x4F\x53\x45\x53\x2E\x2E\x2E\x60\x60\x60","\x2E\x70\x6E\x67","\x66\x66\x6D\x70\x65\x67\x20\x2D\x69\x20","\x59\x61\x68\x20\x67\x61\x67\x61\x6C\x2C\x20\x63\x6F\x62\x61\x20\x75\x6C\x61\x6E\x67\x69\x20\x5E\x5F\x5E","\x53\x75\x70\x70\x6F\x72\x74\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\u2728\x20\x2A\x55\x70\x64\x61\x74\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x28\x53\x45\x4C\x46\x29\x2A\x20","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x63\x65\x6B\x20\x73\x65\x6E\x64\x69\x72\x69","\x23\x69\x7A\x69\x6E\x61\x64\x6D\x69\x6E","\x23\x73\x68\x61\x72\x65","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x64","\x70\x75\x73\x68","\x6D\x61\x70","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x42\x33\x39\x31\x38\x33\x37\x41\x35\x38\x33\x33\x38\x42\x41\x38\x31\x38\x36\x43\x34\x37\x45\x35\x31\x46\x46\x44\x46\x44\x34\x41","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x66\x61\x6B\x65","\x33\x36","\x31\x36\x31\x34\x30\x36\x39\x33\x37\x38","\x50\x45\x4E\x44\x49\x4E\x47","\u2728\x20\x2A\x55\x70\x64\x61\x74\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x28\x53\x45\x4C\x46\x29\x2A","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x2E\x62\x65\x2F\x2D\x38\x68\x70\x7A\x4B\x55\x37\x57\x4A\x45","\x53\x63\x20\x2A\x53\x45\x4C\x46\x2D\x42\x4F\x54\x2A\x20\x62\x79\x20\x6D\x65","\x0A","\x60\x60\x60\x4A\x61\x64\x69\x6B\x61\x6E\x20\x42\x6F\x74\x20\x73\x65\x62\x61\x67\x61\x69\x20\x61\x64\x6D\x69\x6E\x20\x74\x65\x72\x6C\x65\x62\x69\x68\x20\x64\x61\x68\x75\x6C\x75\x60\x60\x60","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x4F\x50\x45\x4E\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x20\x43\x4C\x4F\x53\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x53\x6F\x6E\x67\x2E\x2E\x2E\x60\x60\x60","\x61\x6C\x6C","\x75\x72\x6C","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A\x5C\x6E\x5C\x6E\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33\x5C\x6E\x2A\x46\x69\x6C\x65\x73\x69\x7A\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x64\x61\x74\x61","\x5C\x6E\x5C\x6E\x5F\x55\x6E\x74\x75\x6B\x20\x64\x75\x72\x61\x73\x69\x20\x6C\x65\x62\x69\x68\x20\x64\x61\x72\x69\x20\x62\x61\x74\x61\x73\x20\x64\x69\x73\x61\x6A\x69\x6B\x61\x6E\x20\x64\x61\x6C\x61\x6D\x20\x6D\x65\x6B\x74\x75\x6B\x20\x6C\x69\x6E\x6B\x5F","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A","\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33","\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x5F\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x74\x75\x6E\x67\x67\x75\x20\x66\x69\x6C\x65\x20\x6D\x65\x64\x69\x61\x20\x73\x65\x64\x61\x6E\x67\x20\x64\x69\x6B\x69\x72\x69\x6D\x20\x6D\x75\x6E\x67\x6B\x69\x6E\x20\x62\x75\x74\x75\x68\x20\x62\x65\x62\x65\x72\x61\x70\x61\x20\x6D\x65\x6E\x69\x74\x5F","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6E\x79\x75\x72\x6C\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2D\x63\x72\x65\x61\x74\x65\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x67\x65\x74","\x61\x70\x69","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x74\x69\x74\x6C\x65","\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x31\x30","\x32\x30\x32\x31","\x49\x4E\x51\x55\x49\x52\x59","\x43\x41\x54\x41\x4C\x4F\x47","\x61\x6C\x70\x68\x61\x62\x6F\x74","\x41\x52\x35\x77\x63\x33\x69\x59\x32\x4E\x59\x38\x79\x4A\x61\x4B\x39\x4D\x4D\x58\x64\x6C\x4B\x2F\x61\x67\x75\x55\x78\x6F\x41\x38\x79\x50\x74\x53\x46\x63\x76\x74\x30\x6C\x72\x45\x35\x67\x3D\x3D","\x35\x30\x30\x30\x30\x30\x30\x30","\x49\x44\x52","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65","\x61\x6C\x6C\x6D\x65\x6E\x75","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x66\x75\x6E\x6D\x65\x6E\x75","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x74\x61\x67\x6D\x65\x6E\x75","\x75\x70\x6D\x65\x6E\x75","\x73\x65\x74\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x63\x6D\x64","\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E","\x74\x65\x6C\x65\x67\x72\x61\x6D\x20\x73\x74\x69\x63\x6B\x65\x72","\x6E\x73\x66\x77\x20\x6D\x65\x6E\x75","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6F\x30\x6C\x63\x76\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6D\x77\x62\x32\x65\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x63\x66\x31\x33\x7A\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x78\x6C\x6A\x34\x69\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x35\x79\x70\x78\x6B\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x76\x63\x79\x63\x34\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x7A\x37\x61\x70\x62\x31\x2E\x6A\x70\x67","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x53\x6F\x75\x72\x63\x65\x20\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x61\x20\x6B\x61\x6B\uD83E\uDD70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x42\x69\x67\x20\x54\x68\x61\x6E\x6B\x73\x20\x74\x6F","\x2A\x54\x48\x41\x4E\x4B\x53\x20\x54\x4F\x2A\x0D\x0A\x0D\x0A\u2022\x20\x5A\x45\x45\x4F\x4E\x45\x0D\x0A\u2022\x20\x48\x41\x44\x53\x0D\x0A\u2022\x20\x56\x49\x4E\x5A\x0D\x0A\u2022\x20\x4D\x49\x53\x45\x4C\x0D\x0A\u2022\x20\x53\x41\x54\x52\x49\x4F\x20\x0D\x0A\x0D\x0A\x53\x70\x6F\x6E\x73\x6F\x72\x65\x64\x20\x62\x79\x20\x40","\x40","\x74\x71\x74\x6F","\x63\x68\x69\x6E\x61","\x5B\x20\x21\x20\x5D\x20\x4D\x65\x6E\x63\x61\x72\x69\x20\x63\x65\x63\x61\x6E","\x62\x61\x73\x65\x36\x34","\x66\x72\x6F\x6D","\x4E\x69\x68\x20\x6B\x61\x6B","\u2752\x20\x2A\x68\x74\x74\x70\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2A","\x74\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x63\x68\x69\x6E\x61\x2E\x74\x78\x74","\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x74\x78\x74","\x6D\x61\x6C\x61\x79\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6D\x61\x6C\x61\x79\x73\x69\x61\x2E\x74\x78\x74","\x74\x68\x61\x69\x6C\x61\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x74\x68\x61\x69\x6C\x61\x6E\x64\x2E\x74\x78\x74","\x6B\x6F\x72\x65\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6B\x6F\x72\x65\x61\x2E\x74\x78\x74","\x6A\x61\x70\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6A\x61\x70\x61\x6E\x2E\x74\x78\x74","\x76\x69\x65\x74\x6E\x61\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x76\x69\x65\x74\x6E\x61\x6D\x2E\x74\x78\x74","\x6A\x65\x6E\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x65\x6E\x6E\x69\x2E\x74\x78\x74","\x6A\x69\x73\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x69\x73\x6F\x2E\x74\x78\x74","\x6C\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4C\x69\x73\x61\x2E\x74\x78\x74","\x72\x6F\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x52\x6F\x73\x65\x2E\x74\x78\x74","\x61\x68\x65\x67\x61\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x68\x65\x67\x61\x6F\x2E\x74\x78\x74","\x61\x73\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x73\x73\x2E\x74\x78\x74","\x62\x64\x73\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x64\x73\x6D\x2E\x74\x78\x74","\x62\x6C\x6F\x77\x6A\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x6C\x6F\x77\x6A\x6F\x62\x2E\x74\x78\x74","\x63\x75\x63\x6B\x6F\x6C\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x63\x6B\x6F\x6C\x64\x2E\x74\x78\x74","\x63\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x6D\x2E\x74\x78\x74","\x65\x72\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x65\x72\x6F\x2E\x74\x78\x74","\x66\x65\x6D\x64\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x65\x6D\x64\x6F\x6D\x2E\x74\x78\x74","\x66\x6F\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x6F\x6F\x74\x2E\x74\x78\x74","\x67\x61\x6E\x67\x62\x61\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x61\x6E\x67\x62\x61\x6E\x67\x2E\x74\x78\x74","\x67\x6C\x61\x73\x73\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x6C\x61\x73\x73\x65\x73\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x65\x6E\x74\x61\x69\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x5F\x67\x69\x66\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x6E\x74\x5F\x67\x69\x66\x73\x2E\x74\x78\x74","\x6A\x61\x68\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6A\x61\x68\x79\x2E\x74\x78\x74","\x6D\x61\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x6E\x67\x61\x2E\x74\x78\x74","\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E\x2E\x74\x78\x74","\x6E\x65\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6E\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x6F\x72\x67\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6F\x72\x67\x79\x2E\x74\x78\x74","\x70\x61\x6E\x74\x69\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x61\x6E\x74\x69\x65\x73\x2E\x74\x78\x74","\x70\x75\x73\x73\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x75\x73\x73\x79\x2E\x74\x78\x74","\x6E\x65\x6B\x6F\x5F\x73\x66\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x74\x65\x6E\x74\x61\x63\x6C\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x65\x6E\x74\x61\x63\x6C\x65\x73\x2E\x74\x78\x74","\x74\x68\x69\x67\x68\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x68\x69\x67\x68\x73\x2E\x74\x78\x74","\x79\x75\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x79\x75\x72\x69\x2E\x74\x78\x74","\x7A\x65\x74\x74\x61\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x7A\x65\x74\x74\x61\x69\x52\x79\x6F\x75\x69\x6B\x69\x2E\x74\x78\x74","\x61\x77\x6F\x61\x77\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x41\x77\x6F\x61\x77\x6F\x2E\x74\x78\x74","\x62\x65\x6E\x65\x64\x69\x63\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x42\x65\x6E\x65\x64\x69\x63\x74\x2E\x74\x78\x74","\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x43\x68\x61\x74\x2E\x74\x78\x74","\x64\x62\x66\x6C\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x42\x66\x6C\x79\x2E\x74\x78\x74","\x64\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67\x2E\x74\x78\x74","\x64\x6F\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x6F\x67\x65\x2E\x74\x78\x74","\x67\x6F\x6A\x6F\x73\x61\x74\x6F\x72\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x47\x6F\x6A\x6F\x73\x61\x74\x75\x72\x75\x2E\x74\x78\x74","\x68\x6F\x70\x65\x5F\x62\x6F\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x48\x6F\x70\x65\x42\x6F\x79\x2E\x74\x78\x74","\x6A\x69\x73\x6F\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4A\x69\x69\x73\x6F\x2E\x74\x78\x74","\x6B\x72\x5F\x72\x6F\x62\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x72\x5F\x72\x6F\x62\x6F\x74\x2E\x74\x78\x74","\x6B\x75\x63\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x75\x63\x69\x6E\x67\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x6C\x6F\x6E\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4C\x6F\x6E\x74\x65\x2E\x74\x78\x74","\x6D\x61\x6E\x75\x73\x69\x61\x5F\x6C\x69\x64\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x61\x6E\x75\x73\x69\x61\x4C\x69\x64\x69\x2E\x74\x78\x74","\x6D\x65\x6E\x6A\x61\x6D\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6E\x6A\x61\x6D\x65\x74\x2E\x74\x78\x74","\x6D\x65\x6F\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6F\x77\x2E\x74\x78\x74","\x6E\x69\x63\x68\x6F\x6C\x61\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4E\x69\x63\x68\x6F\x6C\x61\x73\x2E\x74\x78\x74","\x70\x61\x74\x72\x69\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x61\x74\x72\x69\x63\x6B\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x70\x6F\x70\x6F\x63\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x6F\x70\x6F\x63\x69\x2E\x74\x78\x74","\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x6F\x6E\x6C\x79\x2E\x74\x78\x74","\x6B\x61\x77\x61\x6E\x5F\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x66\x72\x69\x65\x6E\x64\x73\x2E\x74\x78\x74","\x74\x79\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x54\x79\x6E\x69\x2E\x74\x78\x74","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x4C\x69\x73\x74\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74\x20\x61\x64\x61\x20\x64\x69\x73\x69\x6E\x69\x20\x6B\x61\x6B\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x64\x69\x20\x70\x69\x6C\x69\x68","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u25A2\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u25B7","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\u25C9\x20\x41\x6C\x6C\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x6C\x6C\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\x30","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x33","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x66\x75\x6E\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x34","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x35","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x36","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x37","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x38","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x61\x67\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x39","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x75\x70\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x30","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x65\x74\x20\x73\x74\x63\x20\x63\x6D\x64\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x63\x68\x61\x63\x65\x63\x61\x6E\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x65\x6C\x65\x73\x74\x63\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x33","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6E\x73\x66\x77\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x53\x6F\x75\x72\x63\x65\x20\x73\x63\x72\x69\x70\x74\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65\x20\x74\x68\x69\x73\x20\x62\x6F\x74\x5F","\u25C9\x20\x43\x6F\x6E\x74\x72\x69\x62\x75\x74\x69\x6F\x6E","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x61\x6E\x79\x6F\x6E\x65\x20\x77\x68\x6F\x20\x63\x6F\x6E\x74\x72\x69\x62\x75\x74\x65\x64\x20\x74\x6F\x20\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x5F","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x49\x6E\x69\x20\x6B\x61\x6B\x20\x6B\x6F\x6E\x74\x61\x6B\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\x40","\x2A\x53\x54\x41\x54\x55\x53\x2A","\x3E\x20\x4F\x46\x46\x4C\x49\x4E\x45","\x3E\x20\x4F\x4E\x4C\x49\x4E\x45","\x3E\x20\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45","\x3E\x20\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45"];const stc=mek[_0x2363[1]][_0x2363[0]];const msc=mek[_0x2363[1]][_0x2363[2]];wew= fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);alfa2= _0x2363[6];alfa3= _0x2363[7];if(msc){if(msc[_0x2363[8]]== 57212){alpha[_0x2363[10]](from,wew,image,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${tee}${_0x2363[9]}`),quoted:ftroli,caption:help(prefix,hahh,pushname,ownername,status),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_ping}${_0x2363[4]}`){const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0x2363[11]}`,(_0xa9f7x5,_0xa9f7x6,_0xa9f7x7)=>{const _0xa9f7x8=_0xa9f7x6.toString(_0x2363[12]);const _0xa9f7x9=_0xa9f7x8[_0x2363[14]](/Memory:/,_0x2363[13]);const _0xa9f7xa=`${_0x2363[15]}${_0xa9f7x9}${_0x2363[16]}${latensi[_0x2363[17]](4)}${_0x2363[18]}`;fakegroup(_0xa9f7xa)})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_menu}${_0x2363[4]}`){let contentt=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);const mediaa= await alpha[_0x2363[20]](from,contentt,MessageType[_0x2363[19]],{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`)});const buttons=[{buttonId:_0x2363[21],buttonText:{displayText:_0x2363[22]},type:1},{buttonId:_0x2363[23],buttonText:{displayText:_0x2363[24]},type:1},{buttonId:_0x2363[25],buttonText:{displayText:_0x2363[26]},type:1}];const btn={contentText:`${_0x2363[27]}${pushname}${_0x2363[28]}`,footerText:`${_0x2363[4]}${creator}${_0x2363[4]}`,buttons:buttons,headerType:4,imageMessage:mediaa[_0x2363[1]][_0x2363[29]]};alpha[_0x2363[10]](from,btn,MessageType[_0x2363[30]],{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[31],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[32],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[4]}${baper}${_0x2363[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${img}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[4]}${apiku}${_0x2363[4]}`}},quoted:ftoko,sendEphemeral:true})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_self}${_0x2363[4]}`){if(!mek[_0x2363[36]][_0x2363[35]]){return fakestatus(_0x2363[37])};if(banChats=== true){return};uptime= process[_0x2363[38]]();banChats= true;fakeitem(`${_0x2363[39]}`)}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_public}${_0x2363[4]}`){if(!mek[_0x2363[36]][_0x2363[35]]){return fakestatus(_0x2363[37])};if(banChats=== false){return};banChats= false;fakeitem(`${_0x2363[40]}`)}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_image_to_sticker}${_0x2363[4]}`){const isPoto=(type=== _0x2363[29]|| type=== _0x2363[41]);const isVideo=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[41]);const isFoto=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[29]);if((isPoto&&  !mek[_0x2363[1]][_0x2363[41]]|| isFoto)&& args[_0x2363[43]]== 0){const encmedia=isFoto?JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]]:mek;const media= await alpha[_0x2363[49]](encmedia);ran= _0x2363[50]; await ffmpeg(`${_0x2363[69]}${media}${_0x2363[4]}`)[_0x2363[68]](media)[_0x2363[63]](_0x2363[66],function(_0xa9f7x15){console[_0x2363[61]](`${_0x2363[67]}${_0xa9f7x15}${_0x2363[4]}`)})[_0x2363[63]](_0x2363[64],function(_0xa9f7x14){console[_0x2363[61]](`${_0x2363[65]}${_0xa9f7x14}${_0x2363[4]}`);fs[_0x2363[62]](media);reply(_0x2363[64])})[_0x2363[63]](_0x2363[59],function(){console[_0x2363[61]](_0x2363[60]);alpha[_0x2363[10]](from,fs[_0x2363[5]](ran),sticker,{quoted:mek});fs[_0x2363[62]](media);fs[_0x2363[62]](ran)})[_0x2363[58]]([`${_0x2363[54]}`,`${_0x2363[55]}`,`${_0x2363[56]}`,`${_0x2363[57]}`])[_0x2363[53]](_0x2363[52])[_0x2363[51]](ran)}else {if((isPoto&& mek[_0x2363[1]][_0x2363[41]][_0x2363[70]]< 11|| isVideo&& mek[_0x2363[1]][_0x2363[0]][_0x2363[44]][_0x2363[71]][_0x2363[41]][_0x2363[70]]< 11)&& args[_0x2363[43]]== 0){const encmedia=isVideo?JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]]:mek;const media= await alpha[_0x2363[49]](encmedia);ran= _0x2363[72];reply(mess[_0x2363[73]]); await ffmpeg(`${_0x2363[69]}${media}${_0x2363[4]}`)[_0x2363[82]](media[_0x2363[81]](_0x2363[80])[1])[_0x2363[63]](_0x2363[66],function(_0xa9f7x15){console[_0x2363[61]](`${_0x2363[67]}${_0xa9f7x15}${_0x2363[4]}`)})[_0x2363[63]](_0x2363[64],function(_0xa9f7x14){console[_0x2363[61]](`${_0x2363[65]}${_0xa9f7x14}${_0x2363[4]}`);fs[_0x2363[62]](media);tipe= media[_0x2363[75]](_0x2363[74])?_0x2363[76]:_0x2363[77];reply(`${_0x2363[78]}${tipe}${_0x2363[79]}`)})[_0x2363[63]](_0x2363[59],function(){console[_0x2363[61]](_0x2363[60]);alpha[_0x2363[10]](from,fs[_0x2363[5]](ran),sticker,{quoted:mek});fs[_0x2363[62]](media);fs[_0x2363[62]](ran)})[_0x2363[58]]([`${_0x2363[54]}`,`${_0x2363[55]}`,`${_0x2363[56]}`,`${_0x2363[57]}`])[_0x2363[53]](_0x2363[52])[_0x2363[51]](ran)}else {fakegroup(`${_0x2363[83]}${prefix}${_0x2363[84]}`)}}}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_to_image}${_0x2363[4]}`){const isStikerl=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[0]);if(!isStikerl){return fakeitem(_0x2363[85])};fakegroup(_0x2363[86]);encmedia= JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]];media=  await alpha[_0x2363[49]](encmedia);ran= getRandom(_0x2363[87]);exec(`${_0x2363[88]}${media}${_0x2363[33]}${ran}${_0x2363[4]}`,(_0xa9f7x14)=>{fs[_0x2363[62]](media);if(_0xa9f7x14){return reply(_0x2363[89])};buffer= fs[_0x2363[5]](ran);fakethumb(buffer,_0x2363[90]);fs[_0x2363[62]](ran)})}};if(stc){if(stc[_0x2363[8]]== 7552){var value=`${_0x2363[91]}${n}${_0x2363[4]}${n}${_0x2363[33]}`;value+= `${_0x2363[4]}${n}${_0x2363[92]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[4]}${n}${_0x2363[93]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[94]}${n}${_0x2363[95]}`;var group= await alpha[_0x2363[96]](from);var member=group[_0x2363[97]];var mem=[];member[_0x2363[102]](async (_0xa9f7x1b)=>{mem[_0x2363[101]](_0xa9f7x1b[_0x2363[100]][_0x2363[14]](_0x2363[98],_0x2363[99]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x2363[10]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x2363[103]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x2363[104],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x2363[105]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x2363[106],"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[4]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x2363[108],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[33]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x2363[109],"\x73\x74\x61\x74\x75\x73":_0x2363[110]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x2363[8]]== 33178){var value=`${_0x2363[111]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[112]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[113]}${n}${_0x2363[4]}`;value+= _0x2363[114];var group= await alpha[_0x2363[96]](from);var member=group[_0x2363[97]];var mem=[];member[_0x2363[102]](async (_0xa9f7x1b)=>{mem[_0x2363[101]](_0xa9f7x1b[_0x2363[100]][_0x2363[14]](_0x2363[98],_0x2363[99]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x2363[10]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x2363[103]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x2363[104],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x2363[105]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x2363[106],"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[4]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x2363[108],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[33]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x2363[109],"\x73\x74\x61\x74\x75\x73":_0x2363[110]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_group_open}${_0x2363[4]}`){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],false);fakegroup(_0x2363[118])}else {if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_group_close}${_0x2363[4]}`){alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],true);fakegroup(_0x2363[119])}}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_play_music}${_0x2363[4]}`){fakegroup(_0x2363[120]);aramas=  await yts(srchh);aramat= aramas[_0x2363[121]];var mulaikah=aramat[0][_0x2363[122]];try{yta(mulaikah)[_0x2363[135]]((_0xa9f7x1e)=>{const {dl_link,thumb,title,filesizeF,filesize}=_0xa9f7x1e;axios[_0x2363[137]](`${_0x2363[136]}${dl_link}${_0x2363[4]}`)[_0x2363[135]](async (_0xa9f7x1f)=>{if(Number(filesize)>= 100000){return sendMediaURL(from,thumb,`${_0x2363[123]}${title}${_0x2363[124]}${filesizeF}${_0x2363[125]}${_0xa9f7x1f[_0x2363[126]]}${_0x2363[127]}`)};const _0xa9f7x20=`${_0x2363[128]}${n}${_0x2363[4]}${n}${_0x2363[129]}${title}${_0x2363[4]}${n}${_0x2363[130]}${n}${_0x2363[131]}${filesizeF}${_0x2363[4]}${n}${_0x2363[132]}${_0xa9f7x1f[_0x2363[126]]}${_0x2363[4]}${n}${_0x2363[4]}${n}${_0x2363[133]}`;sendMediaURL(from,thumb,_0xa9f7x20); await sendMediaURL(from,dl_link)[_0x2363[134]](()=>{return reply(_0x2363[64])})})})}catch(err){reply(mess[_0x2363[64]][_0x2363[138]])}}};sub_yt_zeeone_ofc= (type== _0x2363[139])?mek[_0x2363[1]][_0x2363[139]][_0x2363[140]]:_0x2363[4];if(sub_yt_zeeone_ofc== _0x2363[141]){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],false);fakegroup(_0x2363[118])};if(sub_yt_zeeone_ofc== _0x2363[142]){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],true);fakegroup(_0x2363[119])};if(sub_yt_zeeone_ofc== _0x2363[143]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":convert(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[154]){wew= fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);alpha[_0x2363[10]](from,wew,image,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa,alfa1]},"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[4]}${baper}${_0x2363[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${img}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[4]}${apiku}${_0x2363[4]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x2363[155]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":download(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[156]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":funmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[157]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":maker(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[158]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":other(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[159]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":ownermenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[160]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":storage(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[161]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":tag(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[162]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":upmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[163]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":set_stc_cmd(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[164]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":cecanmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[165]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":telestiker(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[166]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":nsfw(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[167]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];alpha[_0x2363[10]](from,_0x2363[177],text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[31],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[32],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x2363[180]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];ini_mark= `${_0x2363[103]}`;tqto= `${_0x2363[181]}${ini_mark[_0x2363[81]](_0x2363[182])[0]}${_0x2363[4]}`;alpha[_0x2363[10]](from,tqto,text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[183],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[183],"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(budy=== `${_0x2363[184]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[191]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[192]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[193]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[194]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[195]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[196]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[197]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[198]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[199]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[200]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[201]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[202]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[203]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[204]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[205]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[206]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[207]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[208]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[209]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[210]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[211]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[212]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[213]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[214]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[215]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[216]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[217]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[218]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[219]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[220]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[221]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[222]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[223]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[224]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[225]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[226]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[227]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[228]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[229]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[230]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[231]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[232]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[233]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[234]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[235]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[236]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[237]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[238]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[239]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[240]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[241]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[242]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[243]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[244]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[245]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[246]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[247]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[248]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[249]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[250]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[251]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[252]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[253]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[254]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[255]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[256]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[257]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[258]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[259]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[260]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[261]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[262]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[263]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[264]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[265]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[266]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[267]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[268]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[269]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[270]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[271]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[272]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[273]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[274]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[275]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[276]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[277]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[278]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[279]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[280]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[281]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[282]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[283]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[284]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[285]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[286]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[287]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[288]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[289]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[290]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[291]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[292]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[293]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[294]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[295]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[296]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[297]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[298]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[299]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[300]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[301]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[302]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[303]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};subscribezeeoneofc= (type== _0x2363[304])?mek[_0x2363[1]][_0x2363[304]][_0x2363[305]]:_0x2363[4];let R=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);let Y=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);let N=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);if(subscribezeeoneofc== _0x2363[21]){let pip=alpha[_0x2363[152]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x2363[306]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x2363[307],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x2363[4]}${creator}${_0x2363[4]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x2363[308],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[309],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[154],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[310],"\x72\x6F\x77\x49\x64":_0x2363[154]}]},{"\x74\x69\x74\x6C\x65":_0x2363[311],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[155],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[312],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[314],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[143],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[315],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[316],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[156],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[317],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[318],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[157],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[319],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[320],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[158],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[321],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[322],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[159],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[323],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[324],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[160],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[325],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[326],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[161],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[327],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[328],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[162],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[329],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[330],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[163],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[331],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[332],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[164],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[333],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[334],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[165],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[335],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[336],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[166],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[337],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[338],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[167],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[339],"\x72\x6F\x77\x49\x64":_0x2363[167]}]},{"\x74\x69\x74\x6C\x65":_0x2363[340],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[180],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[341],"\x72\x6F\x77\x49\x64":_0x2363[313]}]}]}},{});alpha[_0x2363[153]](pip,{waitForAck:true})};if(subscribezeeoneofc== _0x2363[23]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];ini_mark= `${_0x2363[4]}${ownerNumber}${_0x2363[342]}`;tqto= `${_0x2363[343]}${ini_mark[_0x2363[81]](_0x2363[182])[0]}${_0x2363[4]}`;alpha[_0x2363[10]](from,tqto,text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[183],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[183],"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(subscribezeeoneofc== _0x2363[25]){fakeitem(`${_0x2363[344]}${n}${_0x2363[4]}${offline?_0x2363[345]:_0x2363[346]}${_0x2363[4]}${n}${_0x2363[4]}${banChats?_0x2363[347]:_0x2363[348]}${_0x2363[4]}`)}
		


switch (command) 
   case 'menu': 
                let pi = alpha.prepareMessageFromContent(from, {
           "listMessage": {
						"title": "⌜ MENU RULS BOTZ⌟",
						"description": `${hahh} ${pushname}`,
						"buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Silahkan Pilih Menunya Kak",
								"rows": [
								   {
										"title": "patnerbotz",
										"rowId": "0"
									},
									{
										"title": "convertmenu",
										"rowId": "0"
									},
									{
										"title": "downloadmenu",
										"rowId": "0"
									},
									{
										"title": "makermenu",
										"rowId": "0"
									},
									{
										"title": "othermenu",
										"rowId": "0"
									},
									{
										"title": "ownermenu",
										"rowId": "0"
									},
									{
										"title": "storagemenu",
										"rowId": "0"
									},
									{
										"title": "tagmenu",
										"rowId": "0"
									},
									{
										"title": "upmenu",
										"rowId": "0"
									}
								]
							}
						]
					}}, {})
 alpha.relayWAMessage(pi, {waitForAck: true})
                break
                case 'patnerbot':
teks =
`┏━➤ 「 *Patner Bot*」
┃┃✯ *1. Aril Dwi Indra Lesmana*😎
┃┃✯ *2. Dimas Ari Saputra*😎
┃┃✯ *3. ArulGanz*😎
┃┃✯ *Kita Nob Bang Jangan Di Bully*
┃┃✯ *Udah Jago Gak Boleh Sombong*
┗━━━━━━━
┏━➤ 「 *Follow Instagram Owner Botz*」
┃┃✯ *https://bit.ly/3dT9725*
┗━━━━━━━`
alpha.sendMessage(from,  teks, { quoted: fgclink })
					break   
   case prefix+'group': 
   case prefix+'gc': 
                let po = alpha.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": `Hi ${pushname}`,
                  "description": "Pilih open/close",
                  "buttonText": "SELECT",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "group open",
                              "rowId": `group open`
                           },
						   {
                              "title": "group close",
                              "rowId": `group close`
                           }
                        ]
                     }]}}, {}) 
            alpha.relayWAMessage(po, {waitForAck: true})
break
case prefix+ 'getbio':
				if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentioned}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		    case prefix+'searchmsg':
		    case prefix+'caripesan':
		    case prefix+'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(mess.wait)
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case prefix+'setname':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fgclink })
					break 
case prefix+'setdesc':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fgclink })
					break   
case prefix+'spam':
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case prefix+'readall':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await alpha.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case prefix+'bcsticker':
case prefix+'bcstik':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcvideo':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case prefix+'bcaudio':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcgif':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        case prefix+'owner':  
        case prefix+'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Nih kontak ownerku', text, {quoted: mek}))
		            break
                
                case prefix+'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `--> ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teks lu`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : Bro Kenz Channel'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT GUA`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	uptime = process.uptime()
		         	 banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		    case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media}`)
		            .inputFormat(media.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media)
		            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
		    case prefix+ 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					fakegroup('```PROSES...```')
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa sub YT : Bro Kenz Channel```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break
			case prefix+ 'set_stc_menu':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case prefix+ 'set_stc_ping':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case prefix+ 'set_stc_music':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case prefix+ 'set_stc_gclose':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case prefix+ 'set_stc_gopen':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case prefix+ 'set_stc_itos':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case prefix+ 'set_stc_to_image':
			case prefix+ 'set_stc_toimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case prefix+ 'set_stc_self':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case prefix+ 'set_stc_public':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 4000000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+'playmp4':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                           })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 4000000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		    case prefix+ 'tiktokaudio':
		case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await alpha.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    alpha.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		    case prefix+ 'ig':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
	case prefix+'pinterest':   
              if (!q) return reply('apa yang mau di cari?')   
              ini_query = args.join('');
				    alpha.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				    data = await fetchJson(`https://fdz-app.herokuapp.com/api/pinterest?q=${ini_query}`)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    alpha.sendMessage(from, pok, image, { quoted: mek})
				    break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+ 'fb':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
			case prefix+ 'term':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`SELF-BOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> GROUP MENU<=====[
*/
  
			case prefix+'add':
                if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Gunakan akun lain untuk melakukan perintah ini```')
                if (!isBotGroupAdmins) return reply('```Jadikan Bot Sebagai Admin```')
                
                if (mentioned){
                    alpha.groupAdd(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMek) {
                    if (quotedMek.sender === owner) return reply(`Tidak bisa kick Owner`)
                    alpha.groupAdd(from, [quotedMek.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    alpha.groupAdd(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
			case prefix+'kick':
                if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Only grup admins```')
                if (!isBotGroupAdmins) return reply('```Jadikan Bot Sebagai Admin```')
                
                if (mentioned){
                    alpha.groupRemove(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMek) {
                    if (quotedMek.sender === owner) return reply(`Tidak bisa kick Owner`)
                    alpha.groupRemove(from, [quotedMek.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    alpha.groupRemove(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case 'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Nama : *${pushname}`
					thumb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by Loyo Grup 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                    alpha.sendMessage(from, thumb,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
					if (args.length < 1) return reply('```TEXT?```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST * 」\n\n${body.slice(4)}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${anu}`, text, { contextInfo: { mentionedJid: [sender] }})
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case prefix+'buggc':
			if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case prefix+'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case prefix+'ghstalk': 
            case prefix+'githubstalk': 
            case prefix+'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[EXEC]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
/*
]=====> STORAGE MENU <=====[
*/
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case prefix+'liststik':
	     case prefix+'liststiker':
	case prefix+'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				default:
				
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Ajg")){
					alpha.updatePresence(from, Presence.composing)
					const daee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, daee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("ajg")){
					alpha.updatePresence(from, Presence.composing)
					const deie = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deie, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjg")){
					alpha.updatePresence(from, Presence.composing)
					const deee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("asu")){
					alpha.updatePresence(from, Presence.composing)
					const dee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, dee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes(`${setting.ownername}`)){
					alpha.updatePresence(from, Presence.composing)
					const dd = fs.readFileSync('./stik/15.webp');
					alpha.sendMessage(from, dd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Apasih jamet ngetag gua`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("epep","ff")){
					alpha.updatePresence(from, Presence.composing)
					const ddd = fs.readFileSync('./stik/12.webp');
					alpha.sendMessage(from, ddd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Dahlah:v`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjing")){
					alpha.updatePresence(from, Presence.composing)
					const de = fs.readFileSync('./stik/3.webp');
					alpha.sendMessage(from, de, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : Bro Kenz Channel", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
