const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const roasterSchema = new mongoose.Schema({
    topic : {
        type : String,
        trim : true
    }, 
    dealerId : {
        type : ObjectId,
        ref : "dealerShip"
    },
    campaignId : {
        type : ObjectId,
        ref : "Campaign"
    },
    topicId  : {
        type : ObjectId,
        ref : "topic"
    },
    trainingDate: {
        type : String,
        trim : true
    },
    trainees : [
        {
            type : ObjectId,
            ref : "exployees"
        }
    ],
    draftStatus : {
        type : String
    }
}, {timestamps : true})

module.exports  = mongoose.model("roaster", roasterSchema)