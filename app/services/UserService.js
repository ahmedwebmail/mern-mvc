import UserProfile from '../models/UserProfile.js';

const viewProfileService = async (req, res) => {
    try{
        let user_id = req.headers.user_id
        let data = await UserProfile.findOne({user_id: user_id})
        return {status: "success", data: data, message: "User profile loaded perfectly"}
    }

    catch(err){
        return {status: "fail", message: "Problem to load user profile"}
    }
}

const createProfileService = async (req, res) => {
    try{
        let user_id = req.headers.user_id
        let req_body = req.body
        req_body.user_id = user_id

        await UserProfile.updateOne(
            {user_id: user_id},
            {$set: req_body},
            {upsert: true}
        )
        return {status: "success", message: "Successfully profile saved"}
    }

    catch(err){
        return {status:"fail", message: "Something went wrong"}
    }
}

const updateProfileService = async (req, res) => {
    try{
        let user_id = req.headers.user_id
        let req_body = req.body
        req_body.user_id = user_id

        await UserProfile.updateOne(
            {user_id: user_id},
            {$set: req_body},
            {upsert: true}
        )
        return {status: "success", message: "Successfully profile updated"}
    }

    catch(err){
        return {status:"fail", message: "Something went wrong"}
    }
}

export default{
    viewProfileService,
    createProfileService,
    updateProfileService
}