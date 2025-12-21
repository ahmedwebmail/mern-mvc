export const create = async (req, res) => {
    return res.json("Brand created");
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

export const index = async (req, res) => {
    return res.json("Listing all brands");
}

export const softDelete = async (req, res) => {
    return res.json(`Soft deleting brand with ID`);
}