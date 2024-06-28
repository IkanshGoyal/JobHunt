const express = require('express');
const router = express.Router();
const recruitersController = require('../controllers/recruitersController');

router.post('/', recruitersController.createRecruiter);

module.exports = router;
