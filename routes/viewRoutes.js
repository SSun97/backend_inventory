const express = require('express');
const {
  getOverview,
  getAddProductForm,
  getUpdateProductForm,
  getShipmentForm,
  deleteProduct,
  getShipments,
  deleteShipment,
} = require('../controllers/viewsController');
const router = express.Router();
// create route
router.route('/').get(getOverview);
router.get('/addProduct', getAddProductForm);
router.get('/deleteProduct/:id', deleteProduct);
router.get('/updateProduct/:slug', getUpdateProductForm);
router.get('/createShipment/:slug', getShipmentForm);
router.get('/shipments', getShipments);
router.get('/deleteShipment/:id', deleteShipment);
module.exports = router;
