import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { navigate, Link } from '@reach/router';
import * as Mui from "@material-ui/core"
import * as MuiIcons from "@material-ui/icons"
import "fontsource-roboto";
import {blue, cyan} from "@material-ui/core/colors";

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

function createData(name, time, date, status) {
    return { name, time, date, status};
}

const rows = [
    createData('Kamal Nouri', "18:39", 14/2/2020, "Not Approved"),
    createData('John Wick', "16:23", 1/3/2021, "Approved"),
    createData('Joe Biden', "9:09", 22/5/2021, "Not Approved"),
    createData('Donald Trump', "7:47", 9/9/2021, "Approved"),
];

const useStyles = Mui.makeStyles({
    table: {
        minWidth: 700,
    },
});

function ButtonApprove() {
        return <Mui.Button
        startIcon={<MuiIcons.Done/>}
        variant={"contained"}
        onClick={() => alert("Status is updated!!")}
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

export default function Appointment() {
    const classes = useStyles();


    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container maxWidth={"lg"} style={{"text-align": "center"}}>
                <Mui.Typography
                    variant={"h1"}
                    component={"div"}
                    color={"primary"}
                    style={{"marginBottom":"10px"}}
                >
                    My Appointment Schedule
                </Mui.Typography>
                <Mui.Grid container lg={12}>
                    <Mui.TableContainer component={Mui.Paper}>
                        <Mui.Table className={classes.table} aria-label="customized table">
                            <Mui.TableHead>
                                <Mui.TableRow>
                                    <StyledTableCell>Patient Name</StyledTableCell>
                                    <StyledTableCell align="right">Time</StyledTableCell>
                                    <StyledTableCell align="center" style={{"paddingLeft":"12em"}}>Date</StyledTableCell>
                                    <StyledTableCell align="center" style={{"paddingLeft":"12em"}}>Actions</StyledTableCell>
                                    <StyledTableCell align="right" style={{"paddingRight":"3em"}}>Status</StyledTableCell>
                                </Mui.TableRow>
                            </Mui.TableHead>
                            <Mui.TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.time}</StyledTableCell>
                                        <StyledTableCell align="right">{row.date}</StyledTableCell>
                                        <StyledTableCell align="right"><ButtonApprove/>     <ButtonReject/></StyledTableCell>
                                        <StyledTableCell align="right">{row.status}</StyledTableCell>
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