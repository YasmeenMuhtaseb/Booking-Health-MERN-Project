import React from 'react'
import corona from '../../Images/corona.jpg'
import './Corona.css'

export default () => {
    return (
        <div class="maincorona">
            <div style={{marginTop: '2%'}} class="mainL"> 
                <h2 style={{fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', width: '100%'}} class="coronah2">Prevention, the best way to end Covid-19</h2>
                <p style={{fontFamily: 'cursive'}} class="coronap"><span class="qutoueblue">Wear a mask, save Lives. </span>wash your hands, keep safe distance. Wash your hands often. Use soap and water, or an alcohol-based hand rub. Maintain a safe distance from anyone who is coughing or sneezing, don’t touch your eyes, nose or mouth, and cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze. If you have a fever, cough and difficulty breathing, seek medical attention.</p>
            </div>
            <img class="coronaImg" src={corona} alt="corona"/>
        </div>
    )
}
