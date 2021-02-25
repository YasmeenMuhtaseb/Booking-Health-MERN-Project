import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './profileStyle.css';
import * as Mui from "@material-ui/core";
import "fontsource-roboto";
import { blue, cyan } from "@material-ui/core/colors";
import * as MuiIcons from "@material-ui/icons";
import profile from '../../Images/profile.png';
import axios from 'axios'
import { navigate } from '@reach/router';
import Appointment from '../Appointment/Appointment'
import Cookies from 'universal-cookie';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const theme = Mui.createMuiTheme({
    palette: {
        primary: {
            main: cyan[900],
        },
        secondary: {
            main: blue[500],
        }
    },
    typography: {
        h1: {
            fontSize: 60,
        }
    },

})

const StyledTableCell = Mui.withStyles((theme) => ({
    palette: {
        primary: {
            main: cyan[900],
        },
        secondary: {
            main: blue[500],
        }
    },
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(Mui.TableCell);

const StyledTableRow = Mui.withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(Mui.TableRow);

const useStyles = Mui.makeStyles({
    table: {
        minWidth: 700,
    },
});

const DoctorDetails = (props) => {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isPatient, setIsPatient] = useState(false);
    const [appointments, setAppointments] = useState([])
    const cookies = new Cookies();
    const patient = cookies.get('user');
    const [filename,setFilename] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/findUser/' + props.id)
            .then(res =>{ 
                setUser(res.data);
            })
        if(patient.role === 0){
            setIsPatient(true);
        }
        axios.get('http://localhost:8000/api/findAppointment')
            .then(res => {
                setAppointments(res.data.filter((appointment) => {
                    if(appointment.doctor._id === props.id){
                        return appointment;
                    }
                }));
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [user.image])

    const approveHandler = (patientId, doctorId, appointmentId) => {
        axios.put('http://localhost:8000/api/addAppointment/'+patientId +"/" + doctorId +"/"+appointmentId)
        .then(res => {
            axios.get('http://localhost:8000/api/findAppointment')
            .then(res => {
                setAppointments(res.data.filter((appointment) => {
                    if(appointment.doctor._id === props.id){
                        return appointment;
                    }
                }));})
        })
        .catch(err => console.log(err))
    }

    const updateProfilePicture = (e) => {
        e.preventDefault();
        console.log(filename);
        const formData = new FormData();
        formData.append('upload', filename);
        axios.put('http://localhost:8000/api/user/' + user._id, formData)
            .then(res => props.reRender());
    }

    const dateHandler = e => {
        setDate(e.target.value)
    }

    const timeHandler = e => {
        setTime(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/addAppointment/"+patient._id + "/" + user._id, {
            time,
            date
        })
            .then(res => {
                setDate("");
                setTime("");
            })
            .catch(err => console.log(err))
    }

    return (
        loaded?
        <div>
            <div class="container emp-profile">
                <div class="row">
                    <div class="col-md-3">
                        <div class="profile-img">
                            {user.image ?
                                <img src={`../img/${user.image}`} alt="" />:
                                <img src={profile} alt="" />
                            }
                            {user._id === patient._id? <form onSubmit={updateProfilePicture} style ={{marginTop: "7%"}}>
                            <Mui.ThemeProvider theme={theme}>
                            <TextField
                                id="upload image"
                                label=""
                                variant="outlined"
                                type="file"
                                name="image"
                                filename="upload"
                                onChange={(e) => setFilename(e.target.files[0])}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Update Picture
                            </Button>
                            </Mui.ThemeProvider>
                            </form> : ""}
                        </div>
                        <div class="row">
                            <h6 className="content">Email: {user.email}</h6>
                            <h6 className="content">Phone Number: {user.phoneNumber}</h6>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-head">
                            <h4>{user.firstName} {user.lastName}</h4>
                            <p align="left">Bio:</p>
                            <p align="left">{user.profile.about}</p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <p class="nav-link active" >Appointments Schedule</p>
                                </li>
                            </ul>
                        </div>
                        <Appointment approve={approveHandler} viewer={user} appointments={appointments}/>
                    </div>
                </div>
                
                {isPatient ? <form onSubmit={submitHandler}>
                <Mui.ThemeProvider theme={theme}>
                    <Mui.Container>
                    <Mui.Typography
                    variant={"h4"}
                    component={"div"}
                    color={"primary"}
                    style={{"textAlign": "center"}}
                    >
                    Book Appointment
                    </Mui.Typography>
                <Mui.Grid container spacing={2} justify="center" lg={12}
                        style={{"text-align": "center", "marginTop": "20px"}}>
                    <Mui.Grid item lg={12}>
                        <Mui.TextField
                            variant={"outlined"}
                            color={"primary"}
                            type={"time"}
                            size={"medium"}
                            margin={"normal"}
                            style={{"width": "20%"}}
                            name="time"
                            onChange={timeHandler}
                            value={time}
                        />
                    </Mui.Grid>

                    <Mui.Grid item lg={12}>

                        <Mui.TextField
                            variant={"outlined"}
                            color={"primary"}
                            type={"date"}
                            size={"medium"}
                            name="date"
                            style={{"width": "20%"}}
                            onChange={dateHandler}
                            value={date}
                        />
                        <br />

                        <Mui.Button
                            type="submit"
                            startIcon={<MuiIcons.Save/>}
                            variant={"contained"}
                            color={"primary"}
                            size={"small"}
                            style={
                                {fontSize: 15, marginTop: "20px", "width": "20%"}
                            }
                        >
                            Book!
                        </Mui.Button>
                        
                    </Mui.Grid>
                </Mui.Grid>

            </Mui.Container>
                </Mui.ThemeProvider>
                </form> : ""}

            </div>
        </div>
        : ""
    )
}

export default DoctorDetails



// <div className={"container jumbotron"} style={{padding:"50px"}}>
//     <h1 className={"text-left"}>Doctor Details</h1>
//     <br />
//     <div className={"col-12"}>
//         <div className={"row"}>
//             <div className={"col-3"}>
//                 <img  className={"img"} />
//             </div>
//             <div className={"col-9"}>
//                 <h2>Etira Valba </h2>
//                 <h4>(specialization)Cardiologist</h4>
//                 <br />
//                 <p>About: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda perspiciatis deleniti culpa sunt cum, nobis veritatis impedit mollitia cumque, odio vero nemo quae laborum eveniet, pariatur, facilis molestiae minima porro.
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis et molestiae, veritatis at enim praesentium architecto. Quisquam, illo, libero.</p>
//                 <ul>
//                     <li>Location</li>
//                     <li>Education</li>
//                     <li>Email</li>
//                     <li>phoneNumber</li>
//                 </ul>
//             </div>
//         </div>
//
//
//     </div>
// </div>