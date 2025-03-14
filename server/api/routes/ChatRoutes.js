/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const router = express.Router();
const { sendNewChat } = require("../../controllers/ChatController");

router.post("/chat", sendNewChat);
