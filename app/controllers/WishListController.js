import WishListService from "../services/WishListService.js";
import WishList from "../models/WishList.js";
import mongoose from 'mongoose';

const object_id = mongoose.Types.ObjectId

export const getWishList = async (req, res) => {
    try{
        let user_id = new object_id(req.headers['user_id'])
        let matchStage = {
            $match:{
                user_id: user_id
            }
        }

        let joinStageProduct = {
            $lookup:{
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "product"
            }
        }

        let data = await WishList.aggregate([
            matchStage,
            joinStageProduct
        ])

        return res.json({status: "success", data: data})
    }

    catch(e){
        return {status: "fail", message: "You have no wishlist", error: e.toString()}
    }
    // let result  = WishListService.viewWishlistService(req)
    // return res.json(result)
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