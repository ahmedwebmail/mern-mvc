import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        product_id:{type:mongoose.Schema.Types.ObjectId,ref:"products", required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId,ref:"users", required:true},
        color:{type:String,required:true},
        qty:{type:String,required:true},
        size:{type:String,required:true}
    }
    ,
    {
        timestamps: true,
        versionKey:false,
    }

)


const CartModel =mongoose.model('carts',DataSchema);
export default CartModel;