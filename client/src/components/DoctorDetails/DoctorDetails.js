import React, { useEffect, useState } from 'react';
import * as Mui from "@material-ui/core"
import * as MuiIcons from "@material-ui/icons"
import "fontsource-roboto";
import {blue, cyan} from "@material-ui/core/colors";
import Appointment from '../Appointment/Appointment';
import { navigate } from '@reach/router';
import axios from 'axios';


const theme = Mui.createMuiTheme({
    palette: {
        primary: {
            main: cyan[900],
        },
        secondary: {
            main: blue[500],
        }
    },
    typography:{
        h1:{
            fontSize:60,
        }
    },

})

export default function DoctorDetails(props) {
    const [loaded, setLoaded] = useState(false);
    const [doctor, setDoctor] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/findUser/' + props.id)
            .then(res =>{ 
                if(res.data.role !== 1){
                    navigate("/")
                }
                setDoctor(res.data);
                setLoaded(true);
                
            })
    }, [])

    return (
        loaded ?
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container maxWidth={"lg"}>
                <Mui.Typography
                    variant={"h1"}
                    component={"div"}
                    color={"primary"}

                >
                    Doctor Profile
                </Mui.Typography>
                <Mui.Grid container lg={12}>
                    <Mui.Grid container spacing={2} justify="center" lg={4}
                              style={{"text-align": "center", "marginTop": "20px", "width": "100%"}}>
                        <img className={"img"}/>
                        <p>pic</p>

                    </Mui.Grid>
                    <Mui.Grid container spacing={2} justify="center" lg={8}
                              style={{"marginTop": "20px"}}
                    >
                        <Mui.Grid item lg={12}>
                            <Mui.Typography
                                variant={"h5"}
                                component={"div"}
                                color={"primary"}
                            >
                                {doctor.firstName} {doctor.lastName}
                            </Mui.Typography>
                        </Mui.Grid>
                        <Mui.Grid item lg={12}>
                            <Mui.Typography
                                variant={"subtitle1"}
                                component={"div"}
                                color={"primary"}
                            >
                                {doctor.profile.specialization}
                            </Mui.Typography>
                        </Mui.Grid>
                        <Mui.Grid item>
                            <Mui.Typography
                                variant={"p"}
                                component={"div"}
                                color={"primary"}
                            >
                                {doctor.about}
                            </Mui.Typography>
                            <Mui.Typography
                                color={"primary"}
                            >
                                <ul>
                                    <li>Location: {doctor.profile.loaction}</li>
                                    <li>Education: {doctor.profile.education}</li>
                                    <li>Email: {doctor.email}</li>
                                    <li>Phone Number: {doctor.phoneNumber}</li>
                                </ul>
                            </Mui.Typography>
                        </Mui.Grid>

                    </Mui.Grid>
                </Mui.Grid>
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
                            autoFocus={true}
                            size={"medium"}
                            margin={"normal"}
                            style={{"width": "20%"}}

                        />
                    </Mui.Grid>

                    <Mui.Grid item lg={12}>

                        <Mui.TextField
                            variant={"outlined"}
                            color={"primary"}
                            type={"date"}
                            size={"medium"}
                            style={{"width": "20%"}}

                        />
                        <br />

                        <Mui.Button lg={12}
                            startIcon={<MuiIcons.Save/>}
                            variant={"contained"}
                            onClick={() => alert("Form is submitted!!")}
                            color={"primary"}
                            size={"medium"}
                            style={
                                {fontSize: 24, marginTop: "20px", "width": "20%"}
                            }
                        >
                            Book!
                        </Mui.Button>
                    </Mui.Grid>
                </Mui.Grid>
            </Mui.Container>
            <Appointment />
        </Mui.ThemeProvider>
        : ""
    );
}



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

