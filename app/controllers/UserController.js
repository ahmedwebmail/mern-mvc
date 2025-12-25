import UserService from '../services/UserService.js'

export const viewProfile = async (req, res) => {
    let result = await viewProfileService(req)
    return res.json(result)
}

export const createProfile = async (req, res) => {
    let result = await UserService.createProfileService(req)
    return res.json(result)
}


export const updateProfile = async (req, res) => {
    let result = await updateProfileService(req)
    return res.json(result)
}
