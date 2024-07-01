const express = require('express');
const router = express.Router();
const { searchUsers, followUser, getProfileByUid } = require('../controllers/userController');

router.get('/api/search', searchUsers);
router.post('/api/follow', followUser);
router.get('/api/company/profile/:uid', getProfileByUid);

module.exports = router;
