import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        product_id:{type:mongoose.Schema.Types.ObjectId, ref: "products", required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId, ref: "users", required:true},
    }
    ,
    {
        timestamps: true,
        versionKey:false,
    }

)


const WishListModel =mongoose.model('wish_lists',DataSchema);
export default WishListModel;