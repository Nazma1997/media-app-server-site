const PostMessage = require('../models/postMessage.js')

const getPosts = (req, res, next) => {
  try{
     const postMessage = PostMessage.find();
     res.status(201).json(postMessage)
  }
  catch (e){
    //  res.status(404).json({message: error.message})
    next()
  }
}

const createPost =(req, res) => {
    
}



module.exports ={
  getPosts,
  createPost,

}