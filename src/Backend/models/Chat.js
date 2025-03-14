/* eslint-disable no-undef */
const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    message: { type: String, required: true, unique: true },
})