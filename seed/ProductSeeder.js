import mongoose, { startSession } from "mongoose";
import { fa, faker } from "@faker-js/faker";
import slugify from "slugify";
import Category from "../app/models/Category.js";
import Brand from "../app/models/Brand.js";
import Product from "../app/models/Product.js";
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


const brands = await Brand.find().select("_id name");
    const brand_array = brands.map(brand => ({
        id: brand._id,
        name: brand.name
    }));

const categories = await Category.find().select("_id name");
const category_array = categories.map(category => ({
    id: category._id,
    name: category.name
}))

const title = faker.commerce.productName();
const create_products= () => ({
  title: title,  
  slug: slugify(title, { lower: true }),
  short_des: faker.commerce.productDescription(),
  price: faker.commerce.price({ min: 1000, max: 100000, dec: 2 }),
//   dicount: faker.number.int({ min: 0, max: 15 }),
//   discount_price: faker.commerce.price({ min: 500, max: 1000, dec: 2 }),
  img: faker.image.avatarGitHub(),
  star: faker.number.int({ min: 1, max: 5 }),
  remark: faker.lorem.sentence(),
  stock: faker.number.int({ min: 0, max: 1000 }),
  category_id: faker.helpers.arrayElement(category_array).id,
  brand_id: faker.helpers.arrayElement(brand_array).id,
});

const products = faker.helpers.multiple(create_products, {
  count: 200,
});

try{
    await Product.insertMany(products);
    console.log("Products inserted successfully");
}
catch(err){
    console.error("Error inserting products:", err);
}

mongoose.connection.close();