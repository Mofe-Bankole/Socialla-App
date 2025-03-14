const express = require("express");
const {
  createNewComment,
  getAllComments,
  deleteComment,
} = require("../../controllers/CommentController");

const router = express.Router();

// Comment Route
router.post("/comment", createNewComment);
router.get("/comments", getAllComments);
router.delete("/comment/delete", deleteComment);

module.exports = router;
