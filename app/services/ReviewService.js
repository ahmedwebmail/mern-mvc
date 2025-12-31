import mongoose from 'mongoose';
import ProductReview from "../models/ProductReview.js"
import { decodeToken } from '../utility/TokenUtility.js';
const object_id = mongoose.Types.ObjectId

const getProductReviewService = async(req, res) =>{
    // let decoded_data = decodeToken(req.headers.token)
    // let user_id = new object_id(decoded_data.user_id)
    try{
        let decoded_data = decodeToken(req.headers.token)
        let user_id = new object_id(decoded_data.user_id)

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

        let data = await ProductReview.aggregate([
            matchStage,
            JoinStageProduct,
            JoinStageUser
        ])
        console.log(data)
        return {status: "success", data: data}
    }
    catch(e){
        // return {status: "error", message: "you have no review", error: e.toString()}
    }
}

const updateProductReviewService = async(req, res) =>{
    try{
        let decoded_data = decodeToken(req.headers.token)
        let user_id = new object_id(decoded_data.user_id)
        let {product_id, description, rating} = req.body

        let params = {
            user_id: user_id,
            product_id: product_id,
            description: description,
            rating: rating
        }

        let review = await ProductReview.updateOne(
            params,
            {$set: params},
            {upsert:true}
        )

        return {status: "success", data: review, message: "Thanks for your review"}
    }

    catch(e){
        return {status: "fail", message: "Something went wrong", error: e.toString()}
    }
}

const createProductReviewService = async(req, res) =>{
    try{
        let decoded_data = decodeToken(req.headers.token)
        let user_id = new object_id(decoded_data.user_id)
        let {product_id, description, rating} = req.body

        let params = {
            user_id: user_id,
            product_id: product_id,
            description: description,
            rating: rating
        }

        let review = await ProductReview.updateOne(
            params,
            {$set: params},
            {upsert:true}
        )

        return {status: "success", data: review, message: "Thanks for your review"}
    }

    catch(e){
        return {status: "fail", message: "Something went wrong", error: e.toString()}
    }
}

export default{
    createProductReviewService,
    updateProductReviewService,
    getProductReviewService

}