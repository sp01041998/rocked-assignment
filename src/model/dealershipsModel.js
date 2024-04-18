const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const dealershipSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    name : {
        type : String,
        trim : true
    }
}, {timestamps : true})

module.exports  = mongoose.model("dealerShip", dealershipSchema)