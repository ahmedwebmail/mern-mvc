import CartListService from "../services/CartListService.js";

export const viewCart = async (req, res) => {
    let result = await CartListService.viewCartlistService(req)
    return res.json(result);
}

export const createCart = async (req, res) => {
    let result = await CartListService.createCartlistService(req)
    return res.json(result);
}

export const updateCart = async (req, res) => {
    return res.json(`Updating brand with ID`);
}

export const removeCart = async (req, res) => {
    let result = await CartListService.createCartlistService(req)
    return res.json(result)
}
