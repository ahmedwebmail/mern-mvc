import mongoose from "mongoose";
import User from "../app/models/User.js";
import Product from "../app/models/Product.js";
import Cart from "../app/models/Cart.js";
import { faker } from '@faker-js/faker';
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const user_list = await User.find().select("_id email");
const product_list = await Product.find().select("_id title");

const generateCart = (numCart) => {
  const carts = [];
  for (let i = 0; i < numCart; i++) {
    const user = faker.helpers.arrayElement(user_list);
    const product = faker.helpers.arrayElement(product_list);
    carts.push({
      user_id: user._id,
      product_id: product._id,
      color: faker.color.human(),
      qty: String(Math.floor(Math.random() * 10) + 1),
      size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)]
    });
  }
  return carts;
}

try {
  const carts = generateCart(200);
  await Cart.insertMany(carts);
  console.log("Products seeded successfully");
}

catch (error) {
  console.error("Seeding products failed:", error.toString());
}
finally {
  mongoose.connection.close();
  console.log(" MongoDB connection closed");
}

generateCart(250)