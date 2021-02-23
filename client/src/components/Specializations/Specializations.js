import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImgMediaCard from '../Card/ImgMediaCard'
import SearchComponent from '../Search/SearchComponent'


const Specializations = () => {
    const [loaded, setLoaded] = useState(false);
    const [specializations, setSpecializations] = useState([]);
    const [filteredSpecializations, setFilteredSpecializations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/findSpecializations")
            .then(res => {
                setSpecializations(res.data);
            })
            setLoaded(true);
    }, [])

    const searchHandler = (x) => {
        setSearch(x)
    }

    const filterHandler = (filtered) => {
        setFilteredSpecializations(filtered);
    }

    return (
        loaded ?
        <>
        <SearchComponent specializations={specializations} setSearch={searchHandler} setFilteredSpecializations={filterHandler} />
        {search.length === 0 ? specializations.map((specialization, indx) => {
            return(
                <div style={{display: 'inline-block', margin: '10px 0 0 20px'}}>
                    <ImgMediaCard link={specialization.name} name={specialization.name} img={specialization.img} description={specialization.description} key={specialization._id}/>
                </div>
            )
        }) : filteredSpecializations.map((specialization, indx) => {
            return(
                <div style={{display: 'inline-block', margin: '10px 0 0 20px'}}>
                    <ImgMediaCard link={specialization.name} name={specialization.name} img={specialization.img} description={specialization.description} key={specialization._id}/>
                </div>
            )
        })}
        </>
        :""
    )
}

export default Specializations
