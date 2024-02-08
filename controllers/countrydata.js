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

module.exports = router