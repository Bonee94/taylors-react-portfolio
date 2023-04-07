const nodemailer = require('nodemailer');
//const {user, pass} =
const host = "smtp.ethereal.email";

module.exports = async function getTransport() {

  let transport = nodemailer.createTransport({
    host: host,
    port: 587,
    secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.EMAIL_USER || "dessie.nolan@ethereal.email",
      pass: process.env.EMAIL_PASS || "U4S97shYZT1E5ByJUD",
    },
  });

  return transport
};

