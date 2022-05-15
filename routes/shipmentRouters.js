const {
  getAllShipments,
  createShipment,
} = require('../controllers/shipmentController');
const express = require('express');
const router = express.Router();
// create route
router.route('/').get(getAllShipments).post(createShipment);


module.exports = router;
