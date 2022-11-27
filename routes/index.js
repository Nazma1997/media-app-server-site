const router = require('express').Router()

// routes 
const postsRoutes = require('./posts');
const userRoutes = require('./user')
//Use all routers
// 
router.use('/api/v1/posts', postsRoutes);
router.use('/api/v1/user', userRoutes);

module.exports = router