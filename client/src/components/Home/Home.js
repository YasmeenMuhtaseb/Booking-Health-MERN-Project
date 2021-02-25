import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Corona from '../corona/Corona'
import HomePhoto from '../HomePhoto/HomePhoto'
import Special from '../Specialization/Special'

const Home = () => {
    return (
        <>
            <HomePhoto />
            <Special />
            <Corona />
            <AboutUs id="about"  />
        </>
    )
}

export default Home
