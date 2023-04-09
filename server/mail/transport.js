const nodemailer = require("nodemailer");
require('dotenv').config()

const host = "smtp.gmail.com";

console.log("Email User ",process.env.REACT_APP_EMAIL_USER)

module.exports = async function getTransport() {
  let transport = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.REACT_APP_EMAIL_USER,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    },
  });

  return transport;
};
