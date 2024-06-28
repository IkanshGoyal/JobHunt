const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsController');

router.post('/', applicantsController.createApplicant);

module.exports = router;
