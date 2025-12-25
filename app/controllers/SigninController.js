import LoginService from '../services/LoginService.js'

export const signinUser = async (req, res) => {
    let result = await LoginService.loginService(req)
    return res.json(result)
}

export const verifyLogin = async (req, res) => {
    let result = await LoginService.verifyLoginService(req)
    return res.json(result)
}