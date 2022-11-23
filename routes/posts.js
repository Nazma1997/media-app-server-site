const router = require('express').Router()
const postControllers  = require('../controllers/posts')


router.get('/', postControllers.getPosts )
router.post('/', postControllers.createPost);
router.patch('/:id', postControllers.updatePost)

module.exports = router