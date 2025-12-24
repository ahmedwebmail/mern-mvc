import ProductService from "../services/ProductService.js";

export const productListByBrand = async (req, res) => {
    let result = await ProductService.productListByBrandService(req.params.brand_id);
    return res.json(result);
}

// const productListByCategory = async (req, res) => {
//     return res.json(`Listing products for category with ID`);
// }

// const productListByRemark = async (req, res) => {
//     return res.json(`Listing products by remark: ${req.params.remark}`);
// }

export const productListBySlider = async (req, res) => {
    let data = await ProductService.sliderListService();
    return res.json(data);
}

export const productListBykeyword = async (req, res) => {
    let result = await ProductService.productListByKeywordService(req);
    return res.json(result);
}
export const getProductsReviewListByID = async (req, res) => {
    let result = await ProductService.productReviewListService(req);
    return res.json(result);
}