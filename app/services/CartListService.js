import mongoose from 'mongoose';
import Cart from '../models/Cart.js';

const object_id = mongoose.Types.ObjectId

export const viewCartlistService = async (req, res) => {

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

        let data = await Cart.aggregate([
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

export const createCartlistService = async (req, res) => {
    try{
        let user_id = req.body.user_id
        let {product_id, color, qty, size} = req.body

       let params_to_create = {
            user_id: user_id,
            product_id: product_id,
            color: color,
            qty: qty,
            size: size
        }

        let data = await Cart.create(params_to_create)

        return {status: "success", data: data, message: "Added inito the cart list"}
    }

    catch(e){
        return {status: "fail", message: "Unauthorised", error: e.toString()}
    }
}


export const updateCartlistService = async (req, res) => {
    
}

export const removeCartlistService = async (req, res) => {
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
    viewCartlistService,
    createCartlistService,
    removeCartlistService
}