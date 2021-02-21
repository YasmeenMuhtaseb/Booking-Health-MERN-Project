import React from 'react'
import corona from '../../Images/corona.jpg'
import './Corona.css'

export default () => {
    return (
        <div class="maincorona">
            <div class="mainL"> 
                <h2 class="coronah2">Prevention is petter than cure</h2>
                <p class="coronap"><span class="qutoueblue">Wear a MASK,save Lives. </span>wash your hands,keep safe distance.Clean your hands often. Use soap and water, or an alcohol-based hand rub,Maintain a safe distance from anyone who is coughing or sneezing,Don’t touch your eyes, nose or mouth and Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.If you have a fever, cough and difficulty breathing, seek medical attention.</p>
            </div>
            <img class="coronaImg" src={corona} alt="corona"/>
        </div>
    )
}
