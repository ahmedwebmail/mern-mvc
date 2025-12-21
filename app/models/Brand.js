/**
 * Brand Schema Definition
 * -----------------------
 * This schema defines the structure for storing brand-related information
 * in the MongoDB database using Mongoose.
 *
 * Fields:
 * - name: Represents the brand name. This field is mandatory and must be unique
 *   to prevent duplicate brand entries.
 * - slug: A URL-friendly version of the brand name, typically used for
 *   SEO-optimized routes and cleaner URLs.
 *
 * Schema Options:
 * - timestamps: Automatically adds `createdAt` and `updatedAt` fields
 *   to track record creation and modification times.
 * - versionKey: Disabled to prevent the automatic addition of the `__v` field.
 *
 * This schema is used to create the Brands model, which serves as the
 * interface for performing CRUD operations on the brands collection.
 */
import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        
        slug: {
            type: String,
        },
        img: {
            type: String,
            null: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BrandModel = mongoose.model("brands", DataSchema);

export default BrandModel;