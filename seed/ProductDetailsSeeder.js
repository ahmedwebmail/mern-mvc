import mongoose, { startSession } from "mongoose";
import { faker } from "@faker-js/faker";
import Product from "../app/models/Product.js";
import ProductDetails from "../app/models/ProductDetails.js";
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


const product_list = await Product.find().select("_id name");
    const product_array = product_list.map(products => ({
    id: products._id,
    name: products.name
}));

const create_products= () => ({
  img1: "https://share.google/cBSm3bG5C590rcrOm",
  img2: "https://share.google/cBSm3bG5C590rcrOm",
  img3: "https://share.google/cBSm3bG5C590rcrOm",
  img4: "https://share.google/cBSm3bG5C590rcrOm",
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  size: faker.helpers.arrayElement(["S", "M", "L", "XL", "XXL"]),
  product_id: faker.helpers.arrayElement(product_list)._id,
});

const product_details = faker.helpers.multiple(create_products, {
  count: 200,
});

try{
    await ProductDetails.insertMany(product_details);
    console.log("Products details inserted successfully");
}
catch(err){
    console.error("Error inserting product details:", err);
}

mongoose.connection.close();