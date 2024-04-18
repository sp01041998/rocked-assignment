const campaignService = require("../service/campaignService")

exports.getAllCampaign = async(req, res) => {
    try{
        const {status, code, data, message} = await campaignService.getAllCampaign()
        return res.status(code || 200).send({status, message, data})
     }catch(error){
         console.log("Error while fetching all campaigns", error?.message)
         return res.status(500).send({
             sttaus : false,
             message : error?.message
         })
     }
}