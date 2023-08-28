'use strict';
const express = require('express');
const router = express.Router();

router.use('/organisation-details', require('./apis/organisationDetails/index'));
router.use('/product-details', require('./apis/productDetails/index'));

module.exports = router;