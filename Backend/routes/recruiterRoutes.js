const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/', recruiterController.createRecruiter);
router.get('/', recruiterController.getRecruiters);
router.get('/:id', recruiterController.getRecruiterById);
router.get('/profile/:userId', recruiterController.getRecruiterProfileByUserId);
router.put('/:id', recruiterController.updateRecruiter);
router.delete('/:id', recruiterController.deleteRecruiter);

module.exports = router;