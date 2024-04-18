const topicService = require("../service/topicService")


exports.getTopicsByCampaignId = async(req, res)=> {
    const {campaignId = ''} = req?.params
    try{
        if(!campaignId){
            return res.status(400).send({status : false, message : "campaign id is mandatory."})
        }
       const {status, code, data, message} = await topicService.getTopicsByCampaignId(campaignId)
       return res.status(code || 200).send({status, message, data})
    }catch(error){
        console.log("Error while fetching all topics", error?.message)
        return res.status(500).send({
            sttaus : false,
            message : error?.message
        })
    }
}

exports.updateTopicDetails = async(req, res) => {
    try{
        const {status, code, data, message} = await topicService.updateTopicDetails()
        return res.status(code || 200).send({status, message, data})
     }catch(error){
         console.log("Error while updating topic details", error?.message)
         return res.status(500).send({
             sttaus : false,
             message : error?.message
         })
     }
}