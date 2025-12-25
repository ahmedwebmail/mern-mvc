import nodemailer from "nodemailer"
import {EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_SECURITY} from  "../config/settings.js"

export const sendEmail = async (req) => {
    let transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY, 
        auth:{
            user: EMAIL_USER,
            pass: EMAIL_PASS
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    let mainOptions = {
        from: "This is from global edu advise <info@globaleduadvise.com>",
        to: emailTo,
        text: email_txt,
        subject: emailSubject,

    }
}