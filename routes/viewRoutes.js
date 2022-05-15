const express = require('express');
const {
  getOverview,
  getAddProductForm,
  getUpdateProductForm,
  getShipmentForm,
  deleteProduct,
} = require('../controllers/viewsController');
const router = express.Router();
// create route
router.route('/').get(getOverview);
router.get('/addProduct', getAddProductForm);
router.get('/deleteProduct/:id', deleteProduct);
router.get('/updateProduct/:slug', getUpdateProductForm);
router.get('/createShipment/:slug', getShipmentForm);
module.exports = router;
