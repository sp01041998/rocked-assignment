const dealershipController = require("../service/dealerService")

exports.getAllDealer = async(req,res) => {
    try{
        const {status, code, data, message} = await dealershipController.getAllDealer()
        return res.status(code || 200).send({status, message, data})
     }catch(error){
         console.log("Error while fetching all Dealerships data", error?.message)
         return res.status(500).send({
             sttaus : false,
             message : error?.message
         })
     }
}