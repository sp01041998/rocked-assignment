const employeeModel = require("../model/employeeModel")
const dealershipModel = require("../model/dealershipsModel")

exports.getEmployeeByDealershipId = async(dealershipId) => {
    const employeesData = await employeeModel.find({dealershipId})
    if(!employeesData?.length){
        return {
            status : true,
            code : 200,
            data : employeesData
        }
    }
    return {
        status : true,
        code : 200,
        data : employeesData
    }
}

exports.updateEmployeesDetails = async() => {
    const employeesData = await employeeModel.find({})
    if(!employeesData.length){
        return {
            status : false,
            code : 404,
            message : "No employee record found"
        }
    }
    const dealerShipData = await dealershipModel.find()
    if(!dealerShipData.length){
        return {
            status : false,
            code : 404,
            message : "No dealership record found"
        }
    }

    const mapDealershipIdToObjectId  = {}

    for(let data of dealerShipData){
        const {id, _id} = data || {}
        mapDealershipIdToObjectId[id] = _id
    }
    const employeeDataToUpdate = []
    for(let data of employeesData){
        const {dealership_id = '', _id = ''} = data || {}

        const dealershipObjectId = mapDealershipIdToObjectId[dealership_id]
        employeeDataToUpdate.push(
            {
                updateOne : {
                    filter : {_id : _id},
                    update : {$set : {dealershipId : dealershipObjectId}}
                }
            }
        )
    }
    await employeeModel.bulkWrite(employeeDataToUpdate)
    return {
        status : true,
        code : 200,
        message : "employees record updated successfully"
    }
}