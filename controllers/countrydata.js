const express = require("express")
const router = express.Router()
const countryModel=require("../Models/countryModels")

router.post("/add",async(req,res)=>{
    let data=req.body
    let country=new countryModel(data)
    let result=await country.save()
    res.json({
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let countrydat=await countryModel.find()
    res.json({
        countrydat
    })
})

module.exports = router