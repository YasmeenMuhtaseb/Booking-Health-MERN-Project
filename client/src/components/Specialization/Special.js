import React from 'react'
import image from '../../Images/illlustration.png'
import'./Special.css'

export default() => {
    return (
        <div class="spec">
            <img class="special" src={image} alt="image"/>
            <div class="rightP">
                <h2 class="h2spec">We Are Specialize in Medical Diagnositics</h2>
            <p class="specP">Booking is a website that enables users to know the departments and doctors in the hospital, enables the patient to book an appointment with the doctor and communicate with him.</p>
            </div>
        </div>
    )
}
