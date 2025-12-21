import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    }
    ,
    {
        timestamps: true,
        versionKey:false,
    }

)


const WishListModel =mongoose.model('wish_lists',DataSchema);
export default WishModel;