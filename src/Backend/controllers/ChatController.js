import Chat from "../models/Chat";

const sendNewChat = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ message: "Missing userId or message" });
    }

    // Find the chat for the user or create a new one if it doesn't exist
    let chat = await Chat.findOne({ userId });

    if (!chat) {
      // Create a new chat for the user if one doesn't exist
      chat = new Chat({
        userId,
        messages: [{ message, timestamp: new Date() }],
        lastUpdated: new Date(),
      });
    } else {
      // Append the new message to the existing chat
      chat.messages.push({ message, timestamp: new Date() });
      chat.lastUpdated = new Date(); // Update the last updated time
    }

    // Save the chat to the database
    await chat.save();

    return res.status(201).json({ message: "Chat sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { sendNewChat };
