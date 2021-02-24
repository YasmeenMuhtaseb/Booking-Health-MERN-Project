import React, { useEffect, useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MaterialButton from '../Button/MaterialButton';
import { cyan } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[600],
        },
        secondary: {
            main: cyan[600],
        }
    }

});

const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    marginTop: '1%',
    },
},
searchIcon: {
    display: "inline-block",
    marginTop: '2%',
}
}));



export default function SearchComponent(props) {
const classes = useStyles();
const [filteredSpecializations, setFilteredSpecializations] = useState([]);

useEffect(() => {
    
    props.setFilteredSpecializations(filteredSpecializations);
}, [filteredSpecializations])

const searchHandler = (e) => {
    setFilteredSpecializations(props.specializations.filter((specialization) => {
        return specialization.name.toLowerCase().includes((e.target.value).toLowerCase());
    }));
    props.setSearch(e.target.value);
}

return (
    <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">    
        <TextField style={{width: '23%', marginLeft: '2%'}} id="standard-basic" label="Search" onChange={searchHandler} />
        <div className={classes.searchIcon}><IconButton color="primary"><SearchIcon /></IconButton></div>
        </form>
    </ThemeProvider>
    
);
}
