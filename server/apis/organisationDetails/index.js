const express = require('express');
let router = express.Router();
const organisationController = require('./controller');

router.post('/add-organisation-details', ((req, res) => { organisationController.addOrganizationDetails(req, res); }));
router.get('/all-organisation-details', ((req, res) => { organisationController.getAllOrganizationDetails(req, res); }));
router.get('/get-organisation-details-by-id/:id', ((req, res) => { organisationController.getOrganizationDetailsById(req, res); }));
router.delete('/remove-organisation-details-by-id/:id', ((req, res) => { organisationController.removeOrganizationDetailsById(req, res); }));
router.put('/update-organisation-details/:_id', ((req, res) => { organisationController.updateOrganizationDetails(req, res); }));

module.exports = router;