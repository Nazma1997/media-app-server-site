const router = require('express').Router()

// routes 
const postsRoutes = require('./posts');
const userRoutes = require('./user')
//Use all routers
// 
router.use('/posts', postsRoutes);
router.use('/user', userRoutes);

module.exports = router