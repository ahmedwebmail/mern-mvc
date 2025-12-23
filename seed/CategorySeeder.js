import mongoose from "mongoose";
import Category from "../app/models/Category.js";

mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));
const category_list = [
  {
    name: "Electronics",
    slug: "electronics",
    img: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
  },
  {
    name: "Fashion",
    slug: "fashion",
    img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    name: "Home & Kitchen",
    slug: "home-kitchen",
    img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    img: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
  },
  {
    name: "Books",
    slug: "books",
    img: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    name: "Automotive",
    slug: "automotive",
    img: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
  },
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    img: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png",
  },
  {
    name: "Toys & Games",
    slug: "toys-games",
    img: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png",
  },
  {
    name: "Groceries",
    slug: "groceries",
    img: "https://cdn-icons-png.flaticon.com/512/135/135763.png",
  },
  {
    name: "Furniture",
    slug: "furniture",
    img: "https://cdn-icons-png.flaticon.com/512/3063/3063829.png",
  },
  {
    name: "Mobile Accessories",
    slug: "mobile-accessories",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
  },
  {
    name: "Computer & Laptops",
    slug: "computer-laptops",
    img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    name: "Gaming",
    slug: "gaming",
    img: "https://cdn-icons-png.flaticon.com/512/686/686589.png",
  },
  {
    name: "Office Supplies",
    slug: "office-supplies",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
  },
  {
    name: "Pet Supplies",
    slug: "pet-supplies",
    img: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    img: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
  },
  {
    name: "Baby Products",
    slug: "baby-products",
    img: "https://cdn-icons-png.flaticon.com/512/822/822092.png",
  },
  {
    name: "Music Instruments",
    slug: "music-instruments",
    img: "https://cdn-icons-png.flaticon.com/512/3655/3655575.png",
  },
  {
    name: "Travel & Luggage",
    slug: "travel-luggage",
    img: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
];

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    console.log("Existing categories deleted");

    await Category.insertMany(category_list);
    console.log("Categories inserted successfully");

    process.exit();
  } catch (error) {
    console.error("Category seeding failed:", error);
    process.exit(1);
  }
};

seedCategories();