const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const employeeSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    first_name : {
        type : String,
        trim : true
    }, 
    last_name : {
        type : String,
        trim : true
    },
    role : {
        type : String,
        trim : true
    },
    dealership_id  : {
       type : Number
    },
    profile_pic : {
        type : String,
        trim : true
    },
    dealershipId : {
        type : ObjectId,
        ref : "dealerShip"
    }
}, {timestamps : true})

module.exports  = mongoose.model("exployees", employeeSchema)