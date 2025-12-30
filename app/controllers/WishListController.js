import WishListService from "../services/WishListService.js";
import WishList from "../models/WishList.js";
import mongoose from 'mongoose';

const object_id = mongoose.Types.ObjectId

export const getWishList = async (req, res) => {
    let result  = await WishListService.viewWishlistService(req)
    return res.json(result)
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