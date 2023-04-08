const nodemailer = require("nodemailer")
const getTransport = require("../mail/transport")

const resolvers = {
    Query: {
      console: async () => {
        console.log("Hello")
        return
      }
    },

    Mutation: {
      sendMessage: async (parent, { emailInput, messageInput, fromInput }) => {
        console.log(`Email: ${emailInput}, From: ${fromInput}, Message: ${messageInput}`)
        try {
          const transport = await getTransport();
          transport.sendMail({
            from: "Portfolio <TaylorTurner@portfolio.com>",
            to: "taylor.portfolio.email@gmail.com",
            subject: `Portfolio Test`,
            html: `<h1>From: ${fromInput}</h1>
            <h2>Email: ${emailInput}</h2>
             <h2>Message:</h2>
            <p>${messageInput}</p>
            `
          }).then(info => {
            console.log("Message Id:", info.messageId); 
            console.log("Url:", nodemailer.getTestMessageUrl(info)); 
          })
        } catch (err) {
          console.log(err);
        }

        return { message: "Thank for contacting me! I will get back to you soon.", error: false };
      }
    }
}

module.exports = resolvers;