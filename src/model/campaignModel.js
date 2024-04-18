const mongoose = require("mongoose")

const campaignSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    name : {
        type : String,
        trim : true
    }, 
}, {timestamps : true})

module.exports  = mongoose.model("Campaign", campaignSchema)