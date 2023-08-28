const express = require('express');
let router = express.Router();
const productController = require('./controller');

router.post('/add-product-details', ((req, res) => { productController.addProductDetails(req, res); }));
router.get('/all-product-details', ((req, res) => { productController.getAllProductDetails(req, res); }));
router.get('/get-product-details-by-id/:id', ((req, res) => { productController.getProductDetailsById(req, res); }));
router.delete('/remove-product-details-by-id/:id', ((req, res) => { productController.removeProductDetailsById(req, res); }));
router.put('/update-product-details/:_id', ((req, res) => { productController.updateProductDetails(req, res); }));

module.exports = router;