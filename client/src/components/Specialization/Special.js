import React from 'react'
import image from '../../Images/illlustration.png'
import'./Special.css'

export default() => {
    return (
        <div class="spec">
            <img class="special" src={image} alt="image"/>
            <div class="rightP">
                <h2 class="h2spec">We Specialize in Medical Diagnositics</h2>
            <p class="specP">Booking Health is a website that enables users to know the departments and doctors available, it enables the patient to book an appointment with a doctor and communicate with him.</p>
            </div>
        </div>
    )
}
