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
   const {id:  _id} = req.params;
   const post = req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found');

   const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

   res.json(updatedPost);

}

//Delete a post

const deletePost = async(req, res) => {
  const {id: _id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found');

  await PostMessage.findByIdAndRemove(_id);

  res.json({message: 'Post deleted successfully'})

}

// Update like 

 const likePost = async(req, res) => {
    const {id: _id} = req.params;

    if(!req.userId) return res.json({message: 'UnAuthenticate'});
  
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found');

    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));
    
    if(index === -1){
      post.likes.push(req.userId);
    } else{
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost)

}

module.exports ={
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost

}