const mongoose = require('mongoose');

const chatRoomSchema = mongoose.Schema({

    roomName: {
        type: String,
        required: true,
    },
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatmessage'
    }]
})


const Chatroom = mongoose.model('chatRoom', chatRoomSchema);


module.exports = { Chatroom };