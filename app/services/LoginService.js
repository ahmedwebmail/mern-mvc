import User from '../models/User.js';
import { encodeToken } from '../utility/TokenUtility.js';

const loginService = async (req, res) => {
    try{
        let {email} = req.body

        let otp_code = Math.floor(100000+Math.random()*900000)
        let email_subject = "Verify User Email"
        let email_txt = `Your otp code is: ${otp_code}`

        // await sendEmail(email, email_txt, email_subject)
        await User.updateOne(
            {email: email},
            {$set:{otp:otp_code}},
            {upsert: true}
        )

        return {status: "success", message: "6 digit OTP sent to your email"}
    }
    catch(e){
        return {status: "error", "message": e.toString()}
    }
}

const verifyLoginService = async (req, res) => {
    try{
        let {email, otp} = req.body
        let total = await User.find(
            {email: email},
            {otp: otp}
        )

        if(total.length === 1){
            let user_id = await User.find(
                {email: email},
                {otp: otp}
            ).select("_id")

            let token = encodeToken(email, user_id[0]['_id'].toString())
            await User.updateOne(
                {email: email},
                {$set:{otp: "0"}}
            )

            return {status:"success", message:"OTP verified", token: token}
        }

        else{
            return {status:"Fail", message:"Invalid OTP"}
        }
    }
    catch(e){
        return {status: "error", "message": e.toString()}
    }
}

export default {
    loginService,
    verifyLoginService
}