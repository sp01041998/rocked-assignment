const employeeService = require("../service/employeeService")


exports.getEmployeeByDealershipId = async(req, res)=> {
    const {dealershipId = ''} = req?.params
    try{
        if(!dealershipId){
            return res.status(400).send({status : false, message : "dealershipId is mandatory"})
        }
        const {status, code, data, message} = await employeeService.getEmployeeByDealershipId(dealershipId)
        return res.status(code || 200).send({status, message, data})
     }catch(error){
         console.log(`Error while fetching employee data by dealership id - ${dealershipId}`, error?.message)
         return res.status(500).send({
             sttaus : false,
             message : error?.message
         })
     }
}

exports.updateEmployeesDetails = async(req, res) => {
    try{
        const {status, code, data, message} = await employeeService.updateEmployeesDetails()
        return res.status(code || 200).send({status, message, data})
     }catch(error){
         console.log("Error while fetching all topics", error?.message)
         return res.status(500).send({
             sttaus : false,
             message : error?.message
         })
    }
}