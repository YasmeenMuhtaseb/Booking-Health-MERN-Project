const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    roomID: {
        type:String
    },
    UserName: {
        type: String
    },
    message: {
        type: String
    }
},{ timestamps: true })


const Chat = mongoose.model('chatmessage', chatSchema);


module.exports = { Chat };


//get room
//get the room  from db(check if it is there or not) and create it if no room
//populate the messages if the is room

//add the message to db
//will give you back an id ==> put the id in the room model(first find if there is a room or not)

//retrieve all messages
//get the room name from front-end
//populate by messages