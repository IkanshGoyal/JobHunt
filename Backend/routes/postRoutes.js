const express = require('express');
const router = express.Router();
const companyController = require('../controllers/postController');

router.get('/', companyController.getPosts);
router.post('/', companyController.createPost);
router.put('/:id', companyController.updatePost);
router.delete('/:id', companyController.deletePost);

module.exports = router;
