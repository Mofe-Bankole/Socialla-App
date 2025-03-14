const Chat = require("./../models/Chat");
const Post = require("./../models/Post");

// Create a new comment
const createNewComment = async (req, res) => {
  try {
    const { userId, text } = req.body;
    const postId = req.params.postId;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = new Comment({ userId, postId, text });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all comments for a post
const getAllComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted", deletedComment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createNewComment, getAllComments, deleteComment };
