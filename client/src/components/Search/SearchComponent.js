import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MaterialButton from '../Button/MaterialButton';

const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    // margin: theme.spacing(1),
    // width: '25ch',
    },
},
searchIcon: {
    display: "inline-block",
    marginTop: '15px',
    marginRight: '10px',
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
    <form className={classes.root} noValidate autoComplete="off">    
    <TextField id="standard-basic" label="Search" onChange={searchHandler} />
    <div className={classes.searchIcon}><IconButton color="primary"><SearchIcon /></IconButton></div>
    </form>
);
}
