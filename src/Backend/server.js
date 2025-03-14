/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const authRoutes = require("./api/routes/authRoutes");
const chatRoutes = require("./api/routes/ChatRoutes");
const postRoutes = require("./api/routes/PostRoutes");
const commentRoutes = require("./api/routes/CommentRoutes");

require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.use("/api/posts", postRoutes);
app.use("/api/post/comment", commentRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
