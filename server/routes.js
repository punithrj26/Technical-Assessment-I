'use strict';
const express = require('express');
const router = express.Router();

router.use('/user-details', require('./apis/userDetails/index'));
router.use('/account-details', require('./apis/accountDetails/index'));
router.use('/policy-details', require('./apis/policyDetails/index'));
router.use("/upload-data", require("./apis/uploadData/index"));

module.exports = router;