import React from 'react'
import image from '../../Images/illlustration.png'
import'./Special.css'

export default() => {
    return (
        <div className="spec">
            <img className="special" src={image} alt="image"/>
            <div style={{marginTop: '10%'}} className="rightP">
                <h2 style={{fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', width: '100%'}} className="h2spec">We Specialize in Medical Diagnositics</h2>
            <p style={{fontFamily: 'cursive'}} className="specP">Booking Health is a website that enables users to know the departments and doctors available, it enables the patient to book an appointment with a doctor and communicate with him.</p>
            </div>
        </div>
    )
}
