/**
 * Category Schema Definition
 * ---------------------------
 * This schema represents the structure of the "Categories" collection
 * in the MongoDB database. It is designed to store product or content
 * categories with a unique name and an optional URL-friendly slug.
 *
 * Fields:
 *  - name: A required and unique string used to identify the category.
 *          Enforcing uniqueness prevents duplicate category entries.
 *  - slug: A string used for SEO-friendly URLs and routing purposes.
 *
 * Schema Options:
 *  - timestamps: Automatically adds `createdAt` and `updatedAt` fields
 *                 to track document creation and modification times.
 *  - versionKey: Disabled to prevent MongoDB from adding the `__v` field.
 *
 * This schema is compiled into a Mongoose model and used to perform
 * CRUD operations on the Categories collection.
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

const CategoryModel = mongoose.model("categories", DataSchema);

export default CategoryModel;