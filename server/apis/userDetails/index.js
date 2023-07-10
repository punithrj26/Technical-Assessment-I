const express = require('express');
let router = express.Router();
const userController = require('./controller');

router.post('/add-user-details', ((req, res) => { userController.adduserDetails(req, res); }));
router.get('/all-user-details', ((req, res) => { userController.getAlluserDetails(req, res); }));
router.get('/get-user-details-by-id/:id', ((req, res) => { userController.getuserDetailsById(req, res); }));
router.delete('/remove-user-details-by-id/:id', ((req, res) => { userController.removeuserDetailsById(req, res); }));
router.put('/update-user-details/:_id', ((req, res) => { userController.updateuserDetails(req, res); }));

module.exports = router;