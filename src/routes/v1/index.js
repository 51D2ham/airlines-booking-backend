const express = require('express');
const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes')
const router = express.Router();


// airplane 
router.use('/airplanes',airplaneRoutes)


//test
router.get('/info',InfoController.info)
module.exports = router;