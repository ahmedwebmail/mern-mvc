import CartListService from "../services/CartListService.js";

export const viewCart = async (req, res) => {
    
}

export const createCart = async (req, res) => {
    // console.log(req.body)
    let result = await CartListService.createCartlistService(req)
    return res.json(result);
}

export const updateCart = async (req, res) => {
    return res.json(`Updating brand with ID`);
}

export const removeCart = async (req, res) => {
    return res.json(`Removing brand with ID`);
}
