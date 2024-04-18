const express = require("express")
const router = express.Router()
const {generalAuth} = require('../auth/auth')
const roasterController = require("../controller/roasterController")

router.post("/",generalAuth,  roasterController.createRoaster)
router.get("/", generalAuth,  roasterController.getAllRoaster)
router.get("/:roasterId", generalAuth, roasterController.getRoasterDataById)
router.put("/",generalAuth,  roasterController.updateRoasterById)


module.exports = router