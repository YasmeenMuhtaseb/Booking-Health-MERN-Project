const express = require("express")
const cors = require("cors");
const app = express();
const port = 8000;

const server = require('http').createServer(app);
const { Chatroom, } = require('./models/chatRoomSchema');
const {Chat}=require("./models/chatSchema")

var bodyParser = require('body-parser');
require("./config/mongoose.config");
require('dotenv').config();
const myFirstSecret = process.env.SECRET_KEY;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const options = {
    cors: {
    origin: "*",
    methods: ["GET", "POST"]
    }
};
var io = require('socket.io')(server,options)

io.on('connection', (socket) => {


    console.log(`New connection ! + ${socket.id}`)
    socket.on('join', async({ room }) => {
    console.log(room)
    socket.join(room)
    let dbRoom=await Chatroom.findOne({roomName:room}).populate('messages')
    if(!dbRoom){
        let newRoom=new Chatroom({roomName:room})
        await newRoom.save()

    }else{
        // let roomMessages= await dbRoom.populate('messages')
        socket.emit("data",  {messages:dbRoom.messages} )
    }
    console.log(`joined at ${room}`)
    })

    socket.on('messages', async({ message, room,UserName }) => { // to get the data from front emit function
    console.log("aaaaaaaaaaa",message, room)
    let chat =new Chat({roomID:room, UserName,message})
    let chatObj=await chat.save()
    let roomName=await Chatroom.findOne({roomName:room})
    await Chatroom.updateOne({_id:roomName._id},{messages:[...roomName.messages,chatObj._id]})
    io.to(room).emit('newMessage', chat)
    })
    socket.on('disconnect', () => {
    console.log('user has left')
    })
})



require("./routes/bookingHealth.route")(app);
server.listen(port,() => console.log("The server is running on port: "+ port));