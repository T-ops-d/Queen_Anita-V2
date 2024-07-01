//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BEMTlwU1RVMUtvdEJkMFVPMWdDQlJNMk14NHEzTURhTWZGMWJzTE1IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFJnVkdyWmhlT3lMNHM2N1dTK2tFTTBNKzBKNDIwcC9IOWxvV0VFN0YzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHB1ZFdEd3hqMnI5THJDaEFLUk01cHJpblQ1RnJLSUg3dWRERWc1K1V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiem9HK1BEOFdlR05jUjRjMiszU1FkN1JaR0JGTTd5NUJ5MmRId1JwZGg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIWTd6V0sxUW8yc3JIeUQzTlQzSTBNamhSZk9NekVsYVF1STJwcS94bVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvaXBqODg4NnRRd2N1cDJtdTFrS2phYVB3ZzlFdmhSRFpNTmswTENvUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpNYStKWjBkejROOE5ESUNKTWIwa2V3dGdUcWFCK0pPWmZIOGVZemZVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnFFNlphbWU2dnZVZ0hIVEtrTElOeGZ0OGtPMUJjaVdZdjhLZkpmanpSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRVcU5hdDYvY1owM1FNS1dCVjJvNnlRNzN1ZG0yUHZjVHpXS1J5Q0pjMjFrcHl3RmxJS0hPUXVxcFpiYkxGL1J3bUtrMTk2ejY0TjhZNDJMM1JDL2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJDUnFVYzJ0SnZBbEsybHFUUFRjSXhQbmFqLzNQelFyenJ2MWVZbFlMV1VJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1ckIxaEI0blM2Ry1CZHpmbU1QcDJBIiwicGhvbmVJZCI6IjRjNDAwNTk3LTY4ZTYtNGU1My05Nzc4LTdjMmM5YTQzY2U5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTEp0SS8zdnFLWjBFNmVkWmx1KzVVcmt2ZGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVZtbEd3V1daODBCN2syY3BIVXo2V3NyV1pZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFHU0o2UjJHIiwibWUiOnsiaWQiOiIyMzQ4MDYzMzIwMDA1OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFOT05ZTU9VUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2Voby9VRkVKZUxpclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRDF5RmVhdC9pT0Fyczdwb21BeXNjdWtsRE9uS0pZcXZjanBVSEo0aFVEVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmNTZ25JNldmbnBWK3hjSzZGd1FseHFBVkpINHIxdHQrU3BlNmRoVDV2WHUrb3RZNXdkMlFzd2kwelVrVkNpVHFzdGNncUxtK3cxbmoyZEVTaGFYREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlAxYVRHUEM2MmM0d0crNXpuYUl0V2hHSTBPVU45SVdvUmdWRHFHcit5cWhDbno4ZGh0eGhDZnVCbGZZM3R3MVVKL3lRQlVwOGhNR1FJUHhmem1YRWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MzMyMDAwNToxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJROWNoWG1yZjRqZ0s3TzZhSmdNckhMcEpRenB5aVdLcjNJNlZCeWVJVkExIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODI5OTI1fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
