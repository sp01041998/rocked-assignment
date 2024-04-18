const campaignModel = require("../model/campaignModel")

exports.getAllCampaign = async() => {
    const data = await campaignModel.find()
    if(!data.length){
        return {
            status : false,
            code : 400,
            message : "No campaign found"
        }
    }
    return {
        status : true,
        code : 200,
        data
    }
}