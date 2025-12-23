import ProductService from "../services/ProductService.js";

export const create = async (req, res) => {
    return res.json(`Creating a new brand`);
}

export const show = async (req, res) => {
    return res.json(`Viewing brand with ID`);
}

export const update = async (req, res) => {
    return res.json(`Updating brand with ID`);
}

export const remove = async (req, res) => {
    return res.json(`Removing brand with ID`);
}

export const brandList = async (req, res) => {
    let result = await ProductService.brandListService();
    return res.json(result);
}

export const softDelete = async (req, res) => {
    return res.json(`Soft deleting brand with ID`);
}