const router = require('express').Router()
const userControllers  = require('../controllers/user')


// router.get('/', postControllers.getPosts )
router.post('/signIn', userControllers.signIn);
router.post('/signUp', userControllers.signUp);
// router.patch('/:id', postControllers.updatePost);
// router.delete('/:id', postControllers.deletePost);
// router.patch('/:id/likePost', postControllers.likePost);

module.exports = router;