import { Link } from '@reach/router'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Doctors = props => {
    const [users, setUsers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [doctors, setDoctors] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/findUsers")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setDoctors(users.filter((user) => {
            if(user.role === 1){
            if(user.profile.specialization === props.name){
                return user
            }}
        }))
        setLoaded(true)
    }, [users])

    return (
        <div>
            {loaded && doctors.map((doc, indx) => {
                return (
                    <>
                    <p>{doc.firstName}</p>
                    <Link to={`/doctor/${doc._id}`}>Go to Doctor's profile</Link>
                    </>
                )
            })}
        </div>
    )
}

export default Doctors
