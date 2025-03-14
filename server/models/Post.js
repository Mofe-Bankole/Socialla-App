const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  title: { type: String, unique: true, required: false },
  content: { type: String, unique: true, required: false },
  image: { type: String, unique: true, required: false },
});

module.exports = mongoose.model("Post", postSchema);
