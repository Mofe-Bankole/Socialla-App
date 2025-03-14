import Chat from "../models/Chat";

const sendNewChat = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    return chat.save();
    // return res.status(201).json({ message: "Chat sent successfullty" });
  } catch (error) {
    return res.status(201).json({ message: error });
  }
};


// eslint-disable-next-line no-undef
module.exports = { sendNewChat };
