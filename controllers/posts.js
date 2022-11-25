const {  mongoose } = require('mongoose');
const PostMessage = require('../models/postMessage.js')

// Get All post
const getPosts = async (req, res, next) => {
  try{
     const postMessage =await PostMessage.find();
     res.status(201).json(postMessage)
  }
  catch (e){
    //  res.status(404).json({message: error.message})
    next()
  }
}

// Create a post
const createPost =async(req, res) => {
  const post = req.body;
    try{
      
      const newPost = await new PostMessage(post);
      newPost.save();
      res.status(201).json(newPost);

    }
    catch(e){
      next()
    }
}

// Update a post
const updatePost = async(req,res) => {
   const {id: _id} = req.params;
   const post = req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found');

   const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

   res.json(updatedPost);

}


module.exports ={
  getPosts,
  createPost,
  updatePost

}