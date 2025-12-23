import mongoose from "mongoose";
import Brand from "../app/models/Brand.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const brands = [
  {
    name: "Apple",
    slug: "apple",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    slug: "samsung",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Nike",
    slug: "nike",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    slug: "adidas",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Sony",
    slug: "sony",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Sony_Logo.svg",
  },
  {
    name: "Puma",
    slug: "puma",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_Logo.svg",
  },
  {
    name: "Microsoft",
    slug: "microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    slug: "google",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    slug: "amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Coca-Cola",
    slug: "coca-cola",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  },
];

const seedBrands = async () => {
  try {
    await Brand.deleteMany();
    console.log("Existing brands deleted");

    await Brand.insertMany(brands);
    console.log("Brands inserted successfully");

    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.toString());
    process.exit(1);
  }
};

seedBrands();

// mongoose.connection.close();