/**
 * Product Schema
 * ----------------
 * This schema defines the structure of a product document in the database.
 * It is used to store product-related information for an e-commerce system,
 * including pricing, inventory, categorization, and branding.
 *
 * Fields:
 * - title (String): 
 *   The unique name of the product. This field is required and must be unique.
 *
 * - slug (String):
 *   A URL-friendly version of the product title, typically used for SEO
 *   and routing purposes.
 *
 * - description (String):
 *   A detailed description of the product. This field is required.
 *
 * - price (Number):
 *   The original price of the product. This field is required.
 *
 * - discountedPrice (Number | null):
 *   The discounted price of the product, if applicable.
 *   If no discount exists, this field can be null.
 *
 * - img (String | null):
 *   URL or path to the product image.
 *
 * - star (Number | null):
 *   Product rating (e.g., from 1 to 5 stars).
 *
 * - remark (String | null):
 *   Additional notes or remarks about the product
 *   (e.g., "Best Seller", "New Arrival").
 *
 * - stock (Number):
 *   The number of available units in inventory.
 *   This field is required.
 *
 * - category_id (ObjectId):
 *   Reference to the associated category document.
 *   Links the product to the "categories" collection.
 *
 * - brand_id (ObjectId):
 *   Reference to the associated brand document.
 *   Links the product to the "brands" collection.
 *
 * Schema Options:
 * - timestamps: Automatically adds `createdAt` and `updatedAt` fields.
 * - versionKey: Disabled to prevent adding the `__v` field.
 */
import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        
        slug: {
            type: String,
        },
        short_des: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true, 
        },

        is_discount: {
            type: Boolean,
            default: false,
        },

        dicount:{
            type: Number,
            required: false,
        },
        discount_price: {
            type: Number,
            required: false, 
        },
        img: {
            type: String,
            required: false,
        },
        star:{
            type: Number,
            required: false,
        },
        remark:{
            type: String,
            required: false,
        },

        in_stock: {
            type: Boolean,
            default: false,
        },

        stock: {
            type: Number,
            default: 0,
        },

        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
            required: true,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "brands",
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

if (mongoose.models.products) {
    mongoose.deleteModel("products");
}

const ProductModel = mongoose.model("products", DataSchema);

// const ProductModel = mongoose.models.products || mongoose.model('products', DataSchema);

export default ProductModel;