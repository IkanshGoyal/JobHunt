const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');

router.get('/', adController.getAds);
router.post('/', adController.createAd);
router.put('/:id', adController.updateAd);
router.delete('/:id', adController.deleteAd);

module.exports = router;
