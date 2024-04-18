const roasterServivce = require("../service/roasterService")

exports.createRoaster = async(req, res) => {
    const {dealerId, campaignId, topicId, trainingDate, draftStatus, trainees} = req?.body || {}
    try{
        if(!dealerId || !campaignId || !topicId || !trainingDate || !draftStatus){
            return res.status(400).send({status : false, message : "all fields are mandatory" })
        }
        const {status, code, data, message} = await roasterServivce.createRoaster(req?.body)
        return res.status(code || 200).send({status, message, data})
     }catch(error){
        console.log("Error while craetiung roasters", error?.message)
        return res.status(500).send({
             sttaus : false,
             message : error?.message
        })
    }
}

exports.getAllRoaster= async(req, res) => {
    const {roasterId = ''} = req?.params
    try{
        const {status, code, data, message} = await roasterServivce.getAllRoaster(roasterId)
        return res.status(code || 200).send({status, message, data})
     }catch(error){
        console.log("Error while fetching all roasters", error?.message)
        return res.status(500).send({
             sttaus : false,
             message : error?.message
        })
    }
}

exports.getRoasterDataById  = async(req, res) => {
    const {roasterId = ''} = req?.params
    try{
        const {status, code, data, message} = await roasterServivce.getRoasterDataById(roasterId)
        return res.status(code || 200).send({status, message, data})
     }catch(error){
        console.log("Error while roaster record by id", error?.message)
        return res.status(500).send({
             sttaus : false,
             message : error?.message
        })
    }
}

exports.updateRoasterById = async(req, res) => {
    const {dealerId, campaignId, topicId, trainingDate, draftStatus, trainees, _id} = req?.body || {}
    try{
        if(!dealerId || !campaignId || !topicId || !trainingDate || !draftStatus || !_id){
            return res.status(400).send({status : false, message : "all fields are mandatory" })
        }
        const {status, code, data, message} = await roasterServivce.updateRoasterById(req?.body)
        return res.status(code || 200).send({status, message, data})
     }catch(error){
        console.log("Error while craetiung roasters", error?.message)
        return res.status(500).send({
             sttaus : false,
             message : error?.message
        })
    }
}