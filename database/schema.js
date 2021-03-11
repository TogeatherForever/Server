const mongoose = require("mongoose");
UserCollection = mongoose.Schema({
    user_id:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
})

const UserCollectionModel = mongoose.model("UserCollection",UserCollection)
//console.log("item")
ItemCollection = mongoose.Schema({
    item_id:{
        type: String,
        required:true,
        unique:true
    },
    item_name:{
        type: String,
        required:true
    }, 
    customer_item:String,
    supplier_item:String,
    min_qty:Number,
    unit_price: Number,
    unit_measure:String
})

const ItemCollectionModel = mongoose.model("Item",ItemCollection)

  SupplierCollection = mongoose.Schema({
    supplier_id:{
        type:String,
        unique:true,
        required:true
    },
    supplier_type:{
        type:String,
        required:true,
    },
    supplier_name:{
        type:String,
        required:true,
    }
}) 

const SupplierCollectionModel = mongoose.model("SupplierCollection",SupplierCollection)

SignupBannersCollection = mongoose.Schema({
    banner_id:{    
        type:String,
        unique:true
    },
    banners:{
        type:String
    }
}) 


const SignupBannerModel = mongoose.model("signupbanners",SignupBannersCollection)
module.exports = {
    SupplierCollectionModel:SupplierCollectionModel,
    UserCollectionModel:UserCollectionModel,
    ItemCollectionModel:ItemCollectionModel,
    SignupBannerModel:SignupBannerModel
}