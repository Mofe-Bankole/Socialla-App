/* eslint-disable no-undef */
const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    text: { type: String, unique: true },
})

module.exports = mongoose.model("Comment" , CommentSchema);