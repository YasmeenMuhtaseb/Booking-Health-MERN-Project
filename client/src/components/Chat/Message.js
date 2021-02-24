import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import "./Chat.css";
import io from "socket.io-client";
import Cookies from "universal-cookie";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: cyan[600],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "cyan",
    },
  },
  show: {
    backgroundColor: "gray",
    minWidth: "20%",
    minHeight: "20%",
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
    backgroundColor: "#0a7f8a",
    color: "white",
    "&:hover": {
      backgroundColor: "#00c4cc",
    },
    // padding:"1%"
  },
}));

export default (props) => {
  const classes = useStyles();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState("");
  const cookies = new Cookies();
  const [user1, setUser1] = useState(cookies.get('user'));
  const [user2, setUser2] = useState("")

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/findUser/"+props.id)
      .then(res => setUser2(res.data))


      setRoom(`${user1.firstName} ${user1.lastName} - ${user2.firstName} ${user2.lastName}`)

    // console.log("doctorLIST",doctorList[0].userID.name)

    var newSocket = io.connect(`http://localhost:8000/`);

    newSocket.on("connection", () => {
      console.log("connected");
    });

    setSocket(newSocket);
  }, []);

  const handleSubmit = (e) => {
    console.log(messages)
    e.preventDefault();
    if (socket && message) {
      socket.emit("messages", {
        room,
        message: message,
        // UserName: currentUser
      });
    }
    // myScrollView.scrollToEnd({animated: true})
    setMessage("");
  };

  React.useEffect(() => {
    if (socket) {
      socket.emit("join", {
        room,
      });
      socket.on("data", ({ messages }) => {
        setMessages(messages);
        // console.log("dataaaaaaa", messages)
      });
    }
    return () => {
      if (socket) {
        socket.emit("leaveRoom", {
          room,
        });
      }
    };
  }, [socket]);
  return (
    <ThemeProvider theme={theme}>
      <div className="show">
        <p></p>
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="standard-basic" label="Write a message" onChange={(e) => setMessage(e.target.value)}/>

        {/* <TextField id="filled-basic" label="chat" variant="filled" className={classes.input} /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send
        </Button>
      </form>
    </ThemeProvider>
  );
};
