import WishListService from "../services/WishListService.js";

export const getWishList = async (req, res) => {
    
}

export const createWishList = async (req, res) => {
    let result  = WishListService.createWishListService(req)
    return res.json(result)
}


export const updateWishlist = async (req, res) => {
    
}

export const removeWishlist = async (req, res) => {
    let result  = WishListService.removeWishlistService(req)
    return res.json(result)
}