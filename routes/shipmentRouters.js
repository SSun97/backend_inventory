const {
  getAllShipments,
  createShipment,
  deleteShipment,
} = require('../controllers/shipmentController');
const express = require('express');
const router = express.Router();
// create route
router.route('/').get(getAllShipments).post(createShipment);
router.route('/:id').delete(deleteShipment);

module.exports = router;
