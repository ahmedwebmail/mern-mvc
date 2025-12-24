import ProductService from "../services/ProductService.js";

// const create = async (req, res) => {
//     return res.json("Brand created");
// }

// const show = async (req, res) => {
//     return res.json(`Viewing brand with ID`);
// }

// const update = async (req, res) => {
//     return res.json(`Updating brand with ID`);
// }

// const remove = async (req, res) => {
//     return res.json(`Removing brand with ID`);
// }

// const index = async (req, res) => {
//     return res.json("Listing all brands");
// }

// const softDelete = async (req, res) => {
//     return res.json(`Soft deleting brand with ID`);
// }

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

// const productListBykeyword = async (req, res) => {
//     return res.json(`Listing products by keyword: ${req.params.keyword}`);
// }
