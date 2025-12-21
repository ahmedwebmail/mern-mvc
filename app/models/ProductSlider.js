/**
 * Product Slider Schema
 * ----------------------
 * This schema defines the structure for product slider entries used to
 * display featured or promotional products in a slider component.
 *
 * Each slider item can optionally contain a title, description, price,
 * and image, while maintaining a mandatory reference to the associated
 * product document.
 *
 * Fields:
 * - title        : Optional title displayed on the slider
 * - description  : Optional short description for the product
 * - price        : Optional product price for promotional display
 * - img          : Optional image URL used in the slider
 * - product_id   : Required reference to the related product document
 *
 * Schema Options:
 * - timestamps   : Automatically adds createdAt and updatedAt fields
 * - versionKey   : Disabled to prevent creation of __v field
 *
 * Collection Name:
 * - product_sliders
 */
import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
        title: { 
            type: String, 
            default: null 
        },
        description: { 
            type: String, 
            default: null 
        },
        price: { 
            type: Number, 
            default: null 
        },
        img:{ 
            type: String, 
            default: null 
        },
        product_id: { 
            type: mongoose.Schema.Types.ObjectId, ref: "products", 
            required: true 
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductSliderModel = mongoose.model("product_sliders", DataSchema);

export default ProductSliderModel;