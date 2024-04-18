const express = require("express")
const router = express.Router()
const {generalAuth} = require('../auth/auth')

const campiagnController = require("../controller/campaignController")

router.get("/", generalAuth, campiagnController.getAllCampaign)


module.exports = router