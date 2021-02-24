import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../DoctorDetails/DoctorDetails'
import Profile from '../profile/profile'

const Profiles = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [doc, setDoc] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/findUser/' + props.id)
        .then(res => {
            console.log(props.id)
            console.log(res.data)
            if(res.data.role === 1){
                setDoc(true);
            }
            setLoaded(true);
        })
    },[])

    return (
        loaded?
        <>
        { doc?
            <DoctorDetails reRender={props.reRender} id={props.id}/>
            :
            <Profile reRender={props.reRender} id={props.id} /> }
        </>
        : ""
    )
}

export default Profiles
