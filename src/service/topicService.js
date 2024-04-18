const topicModel = require("../model/topicModel")
const campaignModel = require("../model/campaignModel")

exports.getTopicsByCampaignId = async(campaignId) => {
    const topics = await topicModel.find({campaignId})
    if(!topics.length){
        return {
            status : false,
            code : 404,
            message : `No topics found for given campaignId - ${campaignId}`
        }
    }
    return {
        status : true, 
        code : 200,
        data : topics
    }
}

exports.updateTopicDetails = async() => {
    const topics = await topicModel.find({})
    if(!topics.length){
        return {
            status : false,
            code : 404,
            message : "No topics found"
        }
    }
    const campaigns = await campaignModel.find()

    if(!campaigns.length){
        return {
            status : false,
            code : 404,
            message : "No campiagns found"
        }
    }

    const camapaigIdnMappingWithObjectId = {}
    for(let campaignData of campaigns){
        const {id = '', _id = ''} = campaignData || {}
        camapaigIdnMappingWithObjectId[id] = _id
    }
    let topicUpdateData = []
    for(let topicData of topics){
        const {campaign_id = '', _id} = topicData || {}
        const respectiveObjectCampaignId = camapaigIdnMappingWithObjectId[campaign_id]
        topicUpdateData.push(
            {
                updateOne : {
                    filter : {_id : _id},
                    update : {$set : {campaignId : respectiveObjectCampaignId}}
                }
            }
        )

    }

    await topicModel.bulkWrite(topicUpdateData)

    return {
        status : true,
        code : 200,
        message : "topics updated successfully"
    }
}
