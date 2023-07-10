const express = require('express');
let router = express.Router();
const policyController = require('./controller');

router.post('/add-policy-details', ((req, res) => { policyController.addPolicyDetails(req, res); }));
router.get('/all-policy-details', ((req, res) => { policyController.getAllPolicyDetails(req, res); }));
router.get('/get-policy-details-by-id/:id', ((req, res) => { policyController.getpolicyDetailsById(req, res); }));
router.delete('/remove-policy-details-by-id/:id', ((req, res) => { policyController.removepolicyDetailsById(req, res); }));
router.put('/update-policy-details/:_id', ((req, res) => { policyController.updatePolicyDetails(req, res); }));

module.exports = router;