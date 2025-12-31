import ReviewService from "../services/ReviewService.js";
import mongoose from 'mongoose';

export const createReview = async (req, res) => {
    let result  = await ReviewService.createProductReviewService(req)
    return res.json(result)
}

export const updateReview = async (req, res) => {
    let result  = await ReviewService.updateProductReviewService(req)
    return res.json(result)
}

export const getAllReview = async (req, res) => {
    let result  = await ReviewService.getProductReviewService(req)
    return res.json(result)
}


// export const removeWishlist = async (req, res) => {
//     let result  = WishListService.removeWishlistService(req)
//     return res.json(result)
// }