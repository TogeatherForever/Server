const express = require("express")

const router = express.Router();

const Models = require('../database/schema')

router.get('/all-customer',async(req,res,next)=>{
    try{
        const UserModel = await Models.UserCollectionModel.find((err)=>{
            console.log(err)
        })
        res.json(UserModel)
        //console.log("done")
    }catch(err){
        console.log(err)
    }
})

router.get('/all-supplier',async(req,res,next)=>{
    try{
        const SupplierModel = await Models.SupplierCollectionModel.find((err)=>{
            console.log(err)
        })
        res.json(SupplierModel)
        //console.log("done")
    }catch(err){
        console.log(err)
    }
})

router.get('/all-items',async(req,res,next)=>{
    try{
        const ItemsModel = await Models.ItemCollectionModel.find((err)=>{
            console.log(err)
        })
        res.json(ItemsModel)
        //console.log("done")
    }catch(err){
        console.log(err)
    }
})

router.get('/all-banners',async(req,res)=>{
    const BannerModel = await Models.SignupBannerModel.find((err)=>{
        console.log(err)
    })
    
    res.json(BannerModel)
})


module.exports = router;

