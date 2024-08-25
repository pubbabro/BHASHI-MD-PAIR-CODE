const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

IMG: process.env.IMG=`https://telegra.ph/file/1aad0b60b66909f490635.jpg`,
CAPTION: process.env.CAPTION=`*𝗦𝗣-𝗠𝗗 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗`,
//----------------------------------------------------------------------------------------
EMAIL: process.env.EMAIL=`pubudulakmal466@gmail.com`,
PASS: process.env.PASS=`demone@1#234`,
    
};
