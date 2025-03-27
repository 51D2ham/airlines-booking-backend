const express = require('express');
const{AirplaneController} = require('../../controllers');
const router = express.Router()


//airplane create --->>> /api/v1/airplane {post}
router.post('/',AirplaneController.createAirplane)



module.exports = router