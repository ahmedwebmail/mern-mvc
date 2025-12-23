import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
    {
        user_id:{type:mongoose.Schema.Types.ObjectId, ref:"users", required:true},
        product_id:{type:mongoose.Schema.Types.ObjectId, ref:"products", required:true},
        invoice_id:{type:mongoose.Schema.Types.ObjectId, ref:"invoices", required:true},
        qty:{type:String,required:true},
        price:{type:String,required:true},
        color:{type:String,required:true},
        size:{type:String,required:true}
    },
    
    {
        timestamps: true,
        versionKey:false,
    }

)


const InvoiceProductModel =mongoose.model('invoice_products',DataSchema);
export default InvoiceProductModel;