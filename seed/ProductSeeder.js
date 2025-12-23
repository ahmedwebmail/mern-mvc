import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import slugify from "slugify";

import Category from "../app/models/Category.js";
import Brand from "../app/models/Brand.js";
import Product from "../app/models/Product.js";


await mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority"
);

console.log("✅ MongoDB connected");
// console.log("✅ Product model loaded from:", import.meta.url);
// delete mongoose.connection.models['products'];

const categories = await Category.find().select("_id name").lean();
const brands = await Brand.find().select("_id name").lean();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateProducts = (numProducts) => {
  const products = [];
  for (let i = 0; i < numProducts; i++) {
    const category = faker.helpers.arrayElement(categories);
    const brand = faker.helpers.arrayElement(brands);
    const title = faker.commerce.productName();
    const slug = slugify(title, { lower: true });
    const price = parseFloat(faker.commerce.price(1000, 100000, 2));
    const is_discount = faker.datatype.boolean();
    const discount = is_discount
      ? faker.number.float({ min: 5, max: 30 })
      : 0;
    const discount_price = is_discount ? price - (price * discount / 100) : null;
    products.push({
      title,
      slug,
      short_des: faker.commerce.productDescription(),
      price,
      is_discount,
      dicount: discount,
      discount_price,
      img: faker.image.url(),
      star: getRandomInt(1, 5),
      remark: faker.helpers.arrayElement(["Best Seller", "New Arrival", "Limited Edition"]),
      in_stock: faker.datatype.boolean(),
      stock: getRandomInt(0, 100),
      category_id: category._id,
      brand_id: brand._id
    });
  }
  return products;
}

try {
  const products = generateProducts(200);
  await Product.insertMany(products);
  console.log("Products seeded successfully");
}

catch (error) {
  console.error("Seeding products failed:", error.toString());
}
finally {
  mongoose.connection.close();
  console.log(" MongoDB connection closed");
}