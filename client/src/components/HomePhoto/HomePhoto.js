import React from 'react'
import './HomePhoto.css'
import HomePhoto from '../../Images/home.jpg'

export default () => {
    return (
        <div class="main">
            <img class="mainImg" src={HomePhoto} alt="HomePhoto" />
            <p class="qutoue" ><span class="qutoueblue">Health is a state of complete harmony of the body</span>“, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.”</p>
        </div>
    )
}
