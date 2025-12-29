import WishList from '../models/WishList.js';

export const viewWishlistService = async (req, res) => {
    
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
    createWishListService,
    removeWishlistService
}