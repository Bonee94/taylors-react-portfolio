const nodemailer = require('nodemailer');
//const {user, pass} =
const host = "smtp.gmail.com";

module.exports = async function getTransport() {

  let transport = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || "dessie.nolan@ethereal.email",
      pass: process.env.EMAIL_PASS || "U4S97shYZT1E5ByJUD",
    },
  });

  return transport
};
