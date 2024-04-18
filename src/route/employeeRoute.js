const express = require("express")
const router = express.Router()
const {generalAuth} = require('../auth/auth')
const employeeController = require("../controller/employeeController")

router.get("/:dealershipId",generalAuth,  employeeController.getEmployeeByDealershipId)
router.put("/", generalAuth, employeeController.updateEmployeesDetails)

module.exports = router