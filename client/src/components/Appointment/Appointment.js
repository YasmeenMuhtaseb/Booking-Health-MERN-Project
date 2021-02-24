import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { navigate, Link } from '@reach/router';
import * as Mui from "@material-ui/core"
import * as MuiIcons from "@material-ui/icons"
import "fontsource-roboto";
import {blue, cyan} from "@material-ui/core/colors";
import Cookies from 'universal-cookie';
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

function ButtonApprove(props) {
        
    const liftHandler = e => {
        props.approved(props.patientId, props.doctorId, props.appointmentId);
    }
        return <Mui.Button
        startIcon={<MuiIcons.Done/>}
        variant={"contained"}
        onClick={liftHandler}
        color={"primary"}
        size={"small"}
        style={
            {fontSize: 14, "width": "30%", backgroundColor: theme.palette.success.dark}
        }
    >
        Approve
    </Mui.Button>
}

function ButtonReject() {
    return <Mui.Button
        startIcon={<MuiIcons.Cancel />}
        variant={"contained"}
        onClick={() => alert("Status is updated!!")}
        color={"primary"}
        size={"small"}
        style={
            {fontSize: 14, "width": "30%", backgroundColor: theme.palette.error.dark, marginLeft:"10px"}
        }
    >
        Reject
    </Mui.Button>
}

export default function Appointment(props) {
    const classes = useStyles();
    const cookies = new Cookies();
    const user = cookies.get('user');

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container maxWidth={"lg"} style={{"text-align": "center"}}>
                <Mui.Grid container lg={12}>
                    <Mui.TableContainer component={Mui.Paper}>
                        <Mui.Table className={classes.table} aria-label="customized table">
                            <Mui.TableHead>
                                <Mui.TableRow>
                                    <StyledTableCell>Patient Name</StyledTableCell>
                                    <StyledTableCell align="right">Time</StyledTableCell>
                                    <StyledTableCell align="center" style={{"paddingLeft":"12em"}}>Date</StyledTableCell>
                                    {user._id === props.viewer._id ? <StyledTableCell align="center" style={{"paddingLeft":"12em"}}>Actions</StyledTableCell> : ""}
                                </Mui.TableRow>
                            </Mui.TableHead>
                            <Mui.TableBody>
                                {props.appointments.map((appointment) => (
                                    <StyledTableRow key={appointment._id}>
                                        <StyledTableCell component="th" scope="row">
                                            <a href={`/profile/${appointment.patient._id}`}>{appointment.patient.firstName} {appointment.patient.lastName}</a>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{appointment.time}</StyledTableCell>
                                        <StyledTableCell align="right">{appointment.date}</StyledTableCell>
                                        {user._id === props.viewer._id && appointment.status === false? <StyledTableCell align="right"><ButtonApprove approved={props.approve} patientId={appointment.patient._id} doctorId={appointment.doctor._id} appointmentId={appointment._id}/>     <ButtonReject/></StyledTableCell> : "" }
                                    </StyledTableRow>
                                ))}
                            </Mui.TableBody>
                        </Mui.Table>
                    </Mui.TableContainer>

                </Mui.Grid>

            </Mui.Container>
        </Mui.ThemeProvider>
    );
}