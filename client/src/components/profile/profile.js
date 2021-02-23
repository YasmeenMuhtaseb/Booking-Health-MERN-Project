import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileStyle.css';
import * as Mui from "@material-ui/core";
import "fontsource-roboto";
import {blue, cyan} from "@material-ui/core/colors";
import * as MuiIcons from "@material-ui/icons";
import profile from '../../Images/profile.png';

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

const Profile = () => {
    const classes = useStyles();
    return (
        <div>
            <div class="container emp-profile">
                <div class="row">
                    <div class="col-md-3">
                        <div class="profile-img">
                            <img src={profile} alt=""/>
                            <Mui.Button
                            startIcon={<MuiIcons.Update/>}
                            variant={"contained"}
                            onClick={() => alert("Form is submitted!!")}
                            color={"primary"}
                            size={"small"}
                            style={
                                {fontSize: 15, marginTop: "3%",marginLeft: "3%" ,"width": "100%"}
                            }
                        >
                            Upload Picture 
                        </Mui.Button>
                        </div>
                        <div class="row">
                            <h6 className="content">Email: y.muhtaseb95@gmail.com</h6>
                            <h6 className="content">Phone Number: 0599572149</h6>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-head">
                            <h4>Yasmeen Muhtaseb</h4>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <p class="nav-link active" >Medical History</p>
                                </li>
                            </ul>
                        </div>
                        <Mui.ThemeProvider theme={theme}>
            <Mui.Container  style={{"text-align": "center"}}>
                <Mui.Grid container xs={12}>
                    <Mui.TableContainer component={Mui.Paper}>
                        <Mui.Table className={classes.table} aria-label="customized table">
                            <Mui.TableHead>
                                <Mui.TableRow>
                                    <StyledTableCell>illness</StyledTableCell>
                                    <StyledTableCell >Date</StyledTableCell>
                                    <StyledTableCell >Medicines</StyledTableCell>
                                    <StyledTableCell>Dose</StyledTableCell>
                                </Mui.TableRow>
                            </Mui.TableHead>
                            {/* <Mui.TableBody>
                                {doctors.map((doctor) => (
                                    <StyledTableRow key={doctor._id}>
                                        <StyledTableCell component="th" scope="row">
                                            {doctor.firstName} {doctor.lastName}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{doctor.profile.specialization}</StyledTableCell>
                                        <StyledTableCell align="right">{doctor.profile.location}</StyledTableCell>
                                        <StyledTableCell align="right">{doctor.phoneNumber}</StyledTableCell>
                                        <StyledTableCell align="right"><Link to={`/profile/${doctor._id}`}>Check Profile</Link></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </Mui.TableBody> */}
                        </Mui.Table>
                    </Mui.TableContainer>
                </Mui.Grid>
            </Mui.Container>
        </Mui.ThemeProvider>
                    </div>
                </div>
                <Mui.ThemeProvider theme={theme}>
            <Mui.Container>
            <Mui.Typography
                    variant={"h5"}
                    component={"div"}
                    color={"primary"}
                    style ={{"marginBottom": "-3%"}}
                >
                    Add Medical History
                </Mui.Typography>

                <Mui.Grid container spacing={2} justify="center" lg={12}
                          style={{"text-align": "center", "marginTop": "20px"}}>
                    <Mui.Grid item lg={12}>
                        <Mui.TextField
                            variant={"outlined"}
                            color={"primary"}
                            type={"text"}
                            label={"Illness"}
                            placeholder={"Illness"}
                            autoFocus={true}
                            size={"small"}
                            margin={"normal"}
                            style={{"width": "20%"}}

                        />
                    </Mui.Grid>

                    <Mui.Grid item lg={12}>

                        <Mui.TextField
                            variant={"outlined"}
                            color={"primary"}
                            type={"text"}
                            label={"Medicine"}
                            placeholder={"Aspirin, etc..."}
                            size={"small"}
                            style={{"width": "20%"}}

                        />

                        <Mui.Grid item lg={12} style={{"marginTop": "10px"}}>
                            <Mui.TextField
                                variant={"outlined"}
                                color={"primary"}
                                type={"text"}
                                label={"Dosage"}
                                size={"small"}
                                margin={"normal"}
                                style={{"width": "20%"}}


                            />
                        </Mui.Grid>

                        <Mui.Grid item lg={12} style={{"marginTop": "0px"}}>
                            <Mui.TextField
                                variant={"outlined"}
                                color={"primary"}
                                type={"date"}
                                label={""}
                                size={"small"}
                                margin={"normal"}
                                style={{"width": "20%"}}


                            />
                        </Mui.Grid>


                        <Mui.Button
                            startIcon={<MuiIcons.Save/>}
                            variant={"contained"}
                            onClick={() => alert("Form is submitted!!")}
                            color={"primary"}
                            size={"small"}
                            style={
                                {fontSize: 15, marginTop: "20px", "width": "20%"}
                            }
                        >
                            Submit 
                        </Mui.Button>

                    </Mui.Grid>
                </Mui.Grid>
            </Mui.Container>
        </Mui.ThemeProvider>
            </div>
        </div>
    )
}

export default Profile
