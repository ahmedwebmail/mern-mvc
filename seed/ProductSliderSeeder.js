import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Product from "../app/models/Product.js";
import ProductSlider from "../app/models/ProductSlider.js";
// DB connection
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

});

const seedProductSlider = async () => {
  try {
    // Get 10 random products
    const products = await Product.aggregate([{ $sample: { size: 10 } }]);

    if (products.length === 0) {
      console.log("No products found!");
      return;
    }

    const sliderData = products.map((product) => ({
      title: faker.commerce.productName(),
      description: product.description || "Sample description",
      price: product.price || Math.floor(Math.random() * 1000) + 100,
      img: faker.image.url(640, 480, "technics", true),
      product_id: product._id,
    }));

    // Optional: clear old slider data
    await ProductSlider.deleteMany();

    // Insert new slider data
    await ProductSlider.insertMany(sliderData);

    console.log("✅ Product slider seeded with 10 random products!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    mongoose.connection.close();
  }
};


(async () => {
  await seedProductSlider();
})();
