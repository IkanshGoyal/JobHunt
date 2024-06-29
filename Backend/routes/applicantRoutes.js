const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

router.post('/', applicantController.createApplicant);
router.get('/', applicantController.getApplicants);
router.get('/:id', applicantController.getApplicantById);
router.get('/profile/:userId', applicantController.getApplicantProfileByUserId);
router.put('/:id', applicantController.updateApplicant);
router.delete('/:id', applicantController.deleteApplicant);

module.exports = router;