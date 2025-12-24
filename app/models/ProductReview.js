import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        user_profile_id:{type:mongoose.Schema.Types.ObjectId, ref:"user_profiles", required:true},
        product_id:{type:mongoose.Schema.Types.ObjectId, ref:"products" ,required:true},
        description:{type:String,required:true},
        rating:{type:Number,required:true, min: 0, max: 5},
    }
    ,
    {
        timestamps: true,
        versionKey:false,
    }

)


const ProductReviewModel =mongoose.model('product_reviews',DataSchema);
export default ProductReviewModel;