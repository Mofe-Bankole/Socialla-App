const express = require("express");
const router = express.Router();
const { sendNewChat } = require("../../controllers/ChatController");

router.post("/chat", sendNewChat);

module.exports = router;
