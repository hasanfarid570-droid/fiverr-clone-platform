const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // Participants
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Message Content
  text: { type: String, required: true },
  attachments: [
    {
      url: String,
      fileName: String,
      fileSize: Number,
      fileType: String
    }
  ],
  
  // Status
  isRead: { type: Boolean, default: false },
  readAt: Date,
  
  // Timestamp
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
