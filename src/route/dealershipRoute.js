const express = require("express")
const router = express.Router()
const {generalAuth} = require('../auth/auth')
const dealerShipController = require("../controller/dealershipsController")

router.get("/",generalAuth, dealerShipController.getAllDealer)

module.exports = router