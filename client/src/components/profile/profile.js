import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileStyle.css';
import * as Mui from "@material-ui/core";
import "fontsource-roboto";
import { blue, cyan } from "@material-ui/core/colors";
import * as MuiIcons from "@material-ui/icons";
import profile from '../../Images/profile.png';
import Cookies from 'universal-cookie';
import axios from 'axios'
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

const Profile = (props) => {
    const classes = useStyles();
    const cookies = new Cookies();
    const [user,setUser] = useState("")
    const [illness, setIllness] = useState("")
    const [date, setDate] = useState("")
    const [medicines, setMedicines] = useState("")
    const [dose, setDose] = useState("")
    const [updated, setUpdated] = useState([])
    const [filename,setFilename] = useState("")

    // const[newuser,setNewuser]=useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/findUser/"+cookies.get("user")._id)
            .then(res => {
                setUpdated(res.data.history,console.log("gggggggggggggggggg"+updated));
                setUser(res.data)
            })
            // setLoaded(true);
    }, [user.image])

    const medicinesHandler = e => {
        setMedicines(e.target.value)
    }

    const doseHandler = e => {
        setDose(e.target.value)
    }

    const dateHandler = e => {
        setDate(e.target.value)
    }

    const illnessHandler = e => {
        setIllness(e.target.value)
    }

    const submitHandler = (e) => {
        console.log(illness)
        e.preventDefault();
        axios.post("http://localhost:8000/api/createHistory/" + user._id, {
            illness,
            medicines,
            dose,
            date,
        })
            .then(res => {
                setUpdated(res.data.history)
                console.log(res.date.history)
                setDate("");
                setDose("");
                setIllness("");
                setMedicines("");
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
    return (
        <div>
            {console.log(updated)}
            {console.log(user)}
            <div class="container emp-profile">
                <div class="row">
                    <div class="col-md-3">
                        <div class="profile-img">
                            {user.image ?
                            <img src={`../img/${user.image}`} alt="" />:
                            <img src={profile} alt="" />
                            }
                            
                        {user._id === props.id? <form onSubmit={updateProfilePicture} style ={{marginTop: "7%"}}>
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
                            </form> : ""}
                            
                        </div>
                        <div class="row">
                            <h6 className="content">Email:{user.email}</h6>
                            <h6 className="content">Phone Number: {user.phoneNumber}</h6>
                        </div>
                        <hr></hr>
                        <Mui.ThemeProvider theme={theme}>
                    <Mui.Container style={{"marginLeft":"-4%"}}>
                        <Mui.Typography
                            variant={"h6"}
                            component={"div"}
                            color={"primary"}
                            style={{ "marginBottom": "-3%" }}
                        >
                            Add Medical History
                            </Mui.Typography>
                        <form onSubmit={submitHandler}>
                            <Mui.Grid container spacing={2} justify="center" lg={12}
                                style={{ "text-align": "center"}}>
                                <Mui.Grid item lg={12}>
                                    <Mui.TextField
                                        variant={"outlined"}
                                        color={"primary"}
                                        type={"text"}
                                        label={"Illness"}
                                        placeholder={"Illness"}
                                        size={"small"}
                                        margin={"normal"}
                                        style={{ "width": "100%" }}
                                        name="illness"
                                        onChange={illnessHandler}
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
                                        style={{ "width": "100%" }}
                                        name="medicines"
                                        onChange={medicinesHandler}
                                    />
                                    <Mui.Grid item lg={12} style={{ "marginTop": "10px" }}>
                                        <Mui.TextField
                                            variant={"outlined"}
                                            color={"primary"}
                                            type={"text"}
                                            label={"Dosage"}
                                            size={"small"}
                                            margin={"normal"}
                                            style={{ "width": "100%" }}
                                            name="dose"
                                            onChange={doseHandler}
                                        />
                                    </Mui.Grid>
                                    <Mui.Grid item lg={12} style={{ "marginTop": "0px" }}>
                                        <Mui.TextField
                                            variant={"outlined"}
                                            color={"primary"}
                                            type={"date"}
                                            label={""}
                                            size={"small"}
                                            margin={"normal"}
                                            style={{ "width": "100%" }}
                                            name="date"
                                            onChange={dateHandler}
                                        />
                                    </Mui.Grid>
                                    <Mui.Button
                                    type="submit"
                                        startIcon={<MuiIcons.Save />}
                                        variant={"contained"}
                                        color={"primary"}
                                        size={"small"}
                                        style={
                                            { fontSize: 15, marginTop: "20px", "width": "100%" }
                                        }
                                    >
                                        Submit
                                        </Mui.Button>
                                </Mui.Grid>
                            </Mui.Grid>
                        </form>
                    </Mui.Container>
                </Mui.ThemeProvider>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-head">
                            <h4>{user.firstName} {user.lastName}</h4>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <p class="nav-link active" >Medical History</p>
                                </li>
                            </ul>
                        </div>
                        <Mui.ThemeProvider theme={theme}>
                            <Mui.Container style={{ "text-align": "center" }}>
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
                                            <Mui.TableBody>
                                {updated.map((his) => (
                                    <StyledTableRow key={his._id}>
                                        <StyledTableCell align="right">{his.illness}</StyledTableCell>
                                        <StyledTableCell align="right">{his.date}</StyledTableCell>
                                        <StyledTableCell align="right">{his.medicines}</StyledTableCell>
                                        <StyledTableCell align="right">{his.dose}</StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </Mui.TableBody>
                                        </Mui.Table>
                                    </Mui.TableContainer>
                                </Mui.Grid>
                            </Mui.Container>
                        </Mui.ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
