const mongoose = require("mongoose")
const countryschema= mongoose.Schema({
    Name:String,
    Flag:String,
    Continent:String,
    Formedon:String,
    CurrentPresident:String,
    OfficialLanguage:String
})
module.exports=mongoose.model("Country",countryschema)