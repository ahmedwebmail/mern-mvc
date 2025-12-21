export const create = async (req, res) => {
    return res.json("Category created");
}

export const view = async (req, res) => {
    return res.json(`Viewing category with ID`);
}

export const update = async (req, res) => {
    return res.json(`Updating category with ID`);
}

export const remove = async (req, res) => {
    return res.json(`Removing category with ID`);
}

export const index = async (req, res) => {
    return res.json("Listing all categories");
}

export const softDelete = async (req, res) => {
    return res.json(`Soft deleting category with ID`);
}