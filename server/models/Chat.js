const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  messages: [
    {
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  lastUpdated: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
