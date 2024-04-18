const dealershipsModel = require("../model/dealershipsModel")
const roasterModel = require("../model/roasterModel")

exports.createRoaster= async(bodyData) => {
    const {dealerId, campaignId, trainingDate, trainees, draftStatus, topicId } = bodyData || {}

    const isRoasterAlrteadyExist = await roasterModel.findOne({dealerId, campaignId, topicId})
    if(isRoasterAlrteadyExist){
        return {
            status : false,
            code : 400,
            message : "A roaster data is already exist with given details"
        }
    }
    const dataToCreate = {
        dealerId,
        campaignId,
        topicId,
        trainingDate,
        draftStatus,
        trainees
    }

    const response = await roasterModel.create(dataToCreate)

    return {
        status : true,
        code : 200,
        data : response,
        message : "Roaster is created successfully"
    }

}

exports.getAllRoaster = async() => {
    const data = await roasterModel.find()
    if(!data.length){
        return {
            status : true,
            code : 400,
            message : "No raoster record found"
        }
    }

    return {
        status : true,
        code : 200,
        data
    }
}

exports.getRoasterDataById = async(roasterId) => {

    // here sending all data from after populate but can send only neccassry fields (becasue of time constrains)

    const response = await roasterModel.find({_id :roasterId}).populate("dealerId").populate("campaignId").populate("topicId").populate("trainees")

    if(!response.length){
        return {
            status : true,
            code : 400,
            message : "No roaster record found for given Id"
        }
    }

    return {
        status : true,
        code : 200,
        data : response

    }

}

exports.updateRoasterById = async(bodyData) => {
    const {dealerId, campaignId, topicId, trainingDate, draftStatus, trainees, _id} = bodyData

    const response = await roasterModel.findOneAndUpdate(
        {_id},
        {
            $set : {dealerId, campaignId, topicId, trainingDate, draftStatus, trainees}
        },
        {
            new : true
        }
    )

    if(!response){
        return {
            status : false,
            code : 400,
            message : "No Roaster record found"
        }
    }

    return {
        status : true,
        code : 200,
        data : response,
        message : "roaster record updated successfully"
    }

}