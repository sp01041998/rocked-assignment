const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId
const topicSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    name : {
        type : String,
        trim : true
    }, 
    campaign_id : {
        type : Number
    },
    campaignId  : {
        type : ObjectId,
        ref : "Campaign"
    } 
}, {timestamps : true})

module.exports  = mongoose.model("topic", topicSchema)