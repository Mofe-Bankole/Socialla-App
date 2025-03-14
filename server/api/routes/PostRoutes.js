const express = require("express");
const {
  createNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getPostById,
} = require("../../controllers/PostController");

const router = express.Router();

// Signup route
router.post("/post", createNewPost);
router.get("/posts", getAllPosts);
router.get("/post/delete/:id", getPostById);
router.post("/post/update", updatePost);
router.delete("/post/delete", deletePost);

module.exports = router;
