const nodemailer = require('nodemailer')

const sendMail = async (options) => {
    let testAccount = await nodemailer.createTestAccount();

    
    let transporter  = await nodemailer.createTransport({
        host: "smpt.etheral.email",
        port : 587,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    let info = await transporter.sendMail({
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    })
    console.log("Message sent: %s", info.messageId);
    res.send(info)
}

module.exports = sendMail;