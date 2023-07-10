const express = require('express');
let router = express.Router();
const accountController = require('./controller');

router.post('/add-account-details', ((req, res) => { accountController.addaccountDetails(req, res); }));
router.get('/all-account-details', ((req, res) => { accountController.getAllaccountDetails(req, res); }));
router.get('/get-account-details-by-id/:id', ((req, res) => { accountController.getaccountDetailsById(req, res); }));
router.delete('/remove-account-details-by-id/:id', ((req, res) => { accountController.removeaccountDetailsById(req, res); }));
router.put('/update-account-details/:_id', ((req, res) => { accountController.updateaccountDetails(req, res); }));

module.exports = router;