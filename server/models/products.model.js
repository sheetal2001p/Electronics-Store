const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
   productId:{
     type:Number
   },
    name:{
      type:String      
    },
    price:{
     type:Number
    },
    model:{
     type:String
    },
    qty:{
      type:Number
    },
    type:{
      type:String
    }
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;