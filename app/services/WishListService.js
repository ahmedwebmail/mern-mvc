import mongoose from 'mongoose';
import WishList from '../models/WishList.js';

const object_id = mongoose.Types.ObjectId

export const viewWishlistService = async (req, res) => {

    try{
        let user_id = new object_id(req.headers['user_id'])
        let matchStage = {
            $match:{
                user_id: user_id
            }
        }

        let JoinStageProduct = {
            $lookup:{
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "product"
            }
        }

        let JoinStageUser = {
            $lookup:{
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "user"
            }
        }

        let data = await WishList.aggregate([
            matchStage,
            JoinStageProduct,
            JoinStageUser
        ])

        return {status: "success", data: data}
    }

    catch(e){
        return {status: "fail", message: "You have no wishlist", error: e.toString()}
    }
}

export const createWishListService = async (req, res) => {
    try{
        let user_id = req.body.user_id
        let product_id = req.body.product_id
        let data = await WishList.updateOne(
            { product_id, user_id },
            { $set: { product_id, user_id } },
            {upsert: true, new: true}
        )
        return res.json({status: "success", data: data, message: "Wishlist created"})
    }

    catch(e){
        return {status: "fail", message: "You have no wishlist"}
    }
}


export const updateWishlistService = async (req, res) => {
    
}

export const removeWishlistService = async (req, res) => {
    try{
        let user_id = req.body.user_id
        let product_id = req.body.product_id
        let data = await WishList.deleteOne(
            { product_id, user_id },
            { $set: { product_id, user_id } }
        )
        return res.json({status: "success", data: data, message: "Wishlist created"})
    }

    catch(e){
        return {status: "fail", message: "You have no wishlist"}
    }
}

export default{
    viewWishlistService,
    createWishListService,
    removeWishlistService
}