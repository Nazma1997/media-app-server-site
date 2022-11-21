const router = require('express').Router()

// routes 
const postsRoutes = require('./posts');

//Use all routers
// 
router.use('/api/v1/posts', postsRoutes);


module.exports = router