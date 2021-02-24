import React from 'react'
import './HomePhoto.css'
import HomePhoto from '../../Images/Homw2.webp'

export default () => {
    return (
        <div class="main">
            <img class="mainImg" src={HomePhoto} alt="HomePhoto" />
            <p style={{fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} class="qutoue" ><span class="qutoueblue">"Health is a state of complete harmony of the body, mind and spirit.</span> When one is free from physical disabilities and mental distractions, the gates of the soul open.”</p>
        </div>
    )
}
