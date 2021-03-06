import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { navigate, Link } from '@reach/router';
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

const useStyles = Mui.makeStyles({
    table: {
        minWidth: 700,
    },
});

const AllDoctors = () => {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/findUsers")
            .then(res => {
                setDoctors(res.data.filter((user) => {
                if(user.role === 1){
                    return user;
                }
            }))
        setLoaded(true);
        }
            )
    }, [])

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container maxWidth={"lg"} style={{"text-align": "left"}}>
                <Mui.Typography
                    variant={"h3"}
                    component={"div"}
                    color={"primary"}
                    style={{"marginBottom":"10px", marginTop: '10px'}}
                >
                    Our Doctors
                </Mui.Typography>
                <Mui.Grid container lg={12}>
                    <Mui.TableContainer component={Mui.Paper}>
                        <Mui.Table className={classes.table} aria-label="customized table">
                            <Mui.TableHead>
                                <Mui.TableRow>
                                    <StyledTableCell>Doctor Name</StyledTableCell>
                                    <StyledTableCell >Specialization</StyledTableCell>
                                    <StyledTableCell >Education</StyledTableCell>
                                    <StyledTableCell >Phone Number</StyledTableCell>
                                    <StyledTableCell >Profile</StyledTableCell>
                                </Mui.TableRow>
                            </Mui.TableHead>
                            <Mui.TableBody>
                                {doctors.map((doctor) => (
                                    <StyledTableRow key={doctor._id}>
                                        <StyledTableCell component="th" scope="row">
                                            {doctor.firstName} {doctor.lastName}
                                        </StyledTableCell>
                                        <StyledTableCell >{doctor.profile.specialization}</StyledTableCell>
                                        <StyledTableCell >{doctor.profile.education}</StyledTableCell>
                                        <StyledTableCell >{doctor.phoneNumber}</StyledTableCell>
                                        <StyledTableCell ><Link to={`/profile/${doctor._id}`}>Check Profile</Link></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </Mui.TableBody>
                        </Mui.Table>
                    </Mui.TableContainer>

                </Mui.Grid>

            </Mui.Container>
        </Mui.ThemeProvider>
    )
}

export default AllDoctors
