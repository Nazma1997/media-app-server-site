const router = require('express').Router()
const postControllers  = require('../controllers/posts')
const auth = require("../middleware/auth");

router.get('/', postControllers.getPosts )
router.post('/', auth, postControllers.createPost);
router.patch('/:id',auth, postControllers.updatePost);
router.delete('/:id',auth, postControllers.deletePost);
router.patch('/:id/likePost',auth, postControllers.likePost);

module.exports = router