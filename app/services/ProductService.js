import Brand from '../models/Brand.js';
import Category from '../models/Category.js';
import ProductSlider from '../models/ProductSlider.js';
import Product from '../models/Product.js';
import ProductReview from '../models/ProductReview.js';
import mongoose from 'mongoose';

const brandListService = async () => {
    try {
        const brands = await Brand.find();
        return {status: "success", data: brands};

    }
    catch (error) {
        return {status: "error", message: error.message.toString()}
    }
}

const categoryListService = async () => {
    try {
        const categories = await Category.find();
        return {status: "success", data: categories};
    }
    catch (error) {
        return {status: "error", message: error.message.toString()};
    }
}

const sliderListService = async () => {
    try {
        const sliders = await ProductSlider.find();
        return {status: "success", data: sliders};
    }
    catch (error) {
        return {status: "error", message: error.message.toString()};
    }
}

const productListByBrandService = async (req) => {
    try {
        let brand_id = new mongoose.Types.ObjectId(req);
        let match_stage = { $match: { brand_id: brand_id } };

        let join_with_brand_stage = {
            $lookup: {
                from: "brands",
                localField: "brand_id",
                foreignField: "_id",
                as: "brand"
            }
        }

        let join_with_category_stage = {
            $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "category"
            }
        }

        let unwind_brand_stage = { $unwind: "$brand" };
        let unwind_category_stage = { $unwind: "$category" };

        let projection_stage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'category_id': 0,
                'brand_id': 0
            }
        }

        let data = await Product.aggregate([
            match_stage,
            join_with_brand_stage,
            join_with_category_stage,
            unwind_brand_stage,
            unwind_category_stage,
            projection_stage
        ]);
        return {status: "success", data: data};
    }
    catch (error) {
        return {status: "error", message: error.message.toString()};
    }
}

const productListByKeywordService = async (req) => {
    try {
        let keyword = req
        let regex = new RegExp(keyword, 'i');

        let search_param = [
            {title: regex},
            {short_des: regex}
        ];

        let search_query = { $or: search_param };
        let match_stage = { $match: search_query };

        let join_with_brand_stage = {
            $lookup: {
                from: "brands",
                localField: "brand_id",
                foreignField: "_id",
                as: "brand"
            }
        }

        let join_with_category_stage = {
            $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "category"
            }
        }

        let unwind_brand_stage = { $unwind: "$brand" };
        let unwind_category_stage = { $unwind: "$category" };

        let projection_stage = {
            $project: {
                'brand._id': 0,
                'category._id': 0,
                'category_id': 0,
                'brand_id': 0
            }
        }

        let data = await Product.aggregate([
            match_stage,
            join_with_brand_stage,
            join_with_category_stage,
            unwind_brand_stage,
            unwind_category_stage,
            projection_stage
        ]);

        return {status: "success", data: data};
    }

    catch (error) {
        return {status: "error", message: error.message.toString()};
    }
}

const productReviewListService = async (req) => {
    try {
        let product_id = new mongoose.Types.ObjectId(req.params.product_id);
        let match_stage = { $match: { product_id: product_id } };

        let join_with_profile_stage = {
            $lookup: {
                from: "user_profiles",
                localField: "user_profile_id",
                foreignField: "_id",
                as: "profile"
            }
        }

        let unwind_profile_stage = { $unwind: "$profile" };

        let projection_stage = {
            $project: {
                "description": 1,
                "rating": 1,
                "profile.cus_name": 1,
            }
        }

        let data = await ProductReview.aggregate([
            match_stage,
            join_with_profile_stage,
            unwind_profile_stage,
            projection_stage
        ]);
        return {status: "success", data: data};
    }
    catch (error) {
        return {status: "error", message: error.message.toString()};
    }
}


export default {
    brandListService,
    categoryListService,
    sliderListService,
    productListByBrandService,
    productListByKeywordService,
    productReviewListService
}