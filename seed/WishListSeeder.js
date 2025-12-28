import mongoose from "mongoose";
import WishList from "../app/models/WishList.js";
import User from "../app/models/User.js";
import Product from "../app/models/Product.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const seedWishList = async () => {
  try {
    const users = await User.find({}, "_id");
    const products = await Product.find({}, "_id");

    if (!users.length || !products.length) {
      throw new Error("Users or Products collection is empty");
    }

    const wishlist_data = [];

    for (let i = 0; i < 300; i++) {
      const randomUser =
        users[Math.floor(Math.random() * users.length)]._id;

      const randomProduct =
        products[Math.floor(Math.random() * products.length)]._id;

      wishlist_data.push({
        user_id: randomUser,
        product_id: randomProduct,
      });
    }

    await WishList.insertMany(wishlist_data);

    console.log("Wishlist records inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding wishlist:", error);
    process.exit(1);
  }
};

seedWishList();