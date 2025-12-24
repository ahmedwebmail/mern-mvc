import mongoose, { startSession } from "mongoose";
import { faker } from "@faker-js/faker";
import Product from "../app/models/Product.js";
import UserProfile from "../app/models/UserProfile.js";
import ProductReview from "../app/models/ProductReview.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


const products = await Product.find().select("_id");
const user_profiles = await UserProfile.find().select("_id");

const create_reviews = () => ({
    user_profile_id: faker.helpers.arrayElement(user_profiles)._id,
    product_id: faker.helpers.arrayElement(products)._id,
    description: faker.commerce.productDescription(),
    rating: faker.number.float({ multipleOf: 0.25, min: 0, max: 5 }),
});

const product_reviews = faker.helpers.multiple(create_reviews, {
  count: 400,
});


try{
    await ProductReview.insertMany(product_reviews);
    console.log("Products reviews inserted successfully");
}
catch(err){
    console.error("Error inserting product reviews: ", err.toString());
}

finally{
    mongoose.connection.close()
}