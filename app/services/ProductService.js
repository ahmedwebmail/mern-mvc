import Brand from '../models/Brand.js';
import Category from '../models/Category.js';
import ProductSlider from '../models/ProductSlider.js';

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

export default {
    brandListService,
    categoryListService,
    sliderListService
}