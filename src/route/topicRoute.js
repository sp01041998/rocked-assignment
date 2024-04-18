const express = require("express")
const router = express.Router()
const {generalAuth} = require('../auth/auth')

const topicController = require("../controller/topicController")

router.get("/:campaignId", generalAuth, topicController.getTopicsByCampaignId)
router.put("/", generalAuth, topicController.updateTopicDetails)

module.exports = router