import Post from "../models/Post";


// Create a new post
const createNewPost = async (req, res) => {
  try {
    const { userId, title, content, imageUrl } = req.body;

    if (!userId || !title || !content) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newPost = new Post({ userId, title, content, imageUrl });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// Update a post
const updatePost = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { title, content, imageUrl },
      { new: true }
    );

    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// Delete a post
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.postId);

    if (!deletedPost)
      return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post deleted", deletedPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// eslint-disable-next-line no-undef
module.export = { createNewPost , getAllPosts , updatePost , deletePost , getPostById};
