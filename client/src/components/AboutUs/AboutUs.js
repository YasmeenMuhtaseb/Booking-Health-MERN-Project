import React from 'react'
import './AboutUs.css'
import main from '../../Images/main.png';
import yasmeen from '../../Images/yasmeen.jpg';
import alex from '../../Images/alex.jpg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import facebook from '../../Images/facebook.svg';
import kamal from '../../Images/kamal.jpg';
import manar from '../../Images/manar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function AboutUs() {
    return (
        <div>
            {/* *************************************************************
            -------------------- main section start -------------------------
            ****************************************************************/}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1 className ="fontStyle">Your health is our top priority and concern</h1>
                            <h2 className ="fontStyle">Ourselves suffering the sincerity. <br/> Inhabit her manners adapted age certain, Debating offended at branched striking be subjects</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={main} className="img-fluid animated" alt="text" />
                        </div>
                    </div>
                </div>
            </section>

           
            {/* *************************************************************
            -------------------------- About Us -------------------------
            *****************************************************************/}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div >
                            <p className="fontStyle">
                            ONLINE APPOINTMENT SYSTEM FOR CLINICS AND DOCTORS
                            </p>
                            <p className="fontStyle1">
                            Booking Health facilitates the appointment process for health professionals. Offer your patients the ability to make online appointments with you from every computer and mobile device connected to the internet 24/7. Managing your appointments and calendars with Booking Health makes your health center a streamlined organization that works on an efficient schedule that makes full use of your resources and improves the well-being of your patients. 
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
            

            {/* *************************************************************
            -------------------------- Team --------------------------------
            *****************************************************************/}
            <section id="team" class="team section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Team</h2>
                        <p >We are a Team of experienced students of the AXSOS Academy.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={yasmeen} class="img-fluid" alt="Nayan Pal" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Yasmeen Muhtaseb</h4>
                                            <span>Full Stack Developer</span>
                                            <ul>
                                                <li>Design FrontEnd with (ReactJS)</li>
                                                <li>Design BackEnd with (NodeJs)</li>
                                                <li>Manage Database (MongoDB)</li>
                                            </ul>
                                        </div>
                                        <div className ="divStyle">
                                            <a href="https://www.linkedin.com/in/yasmeen-muhtaseb-054ab1169/"><img src={linkedin} className ="imgStyle"></img></a> 
                                            <a href="https://github.com/YasmeenMuhtaseb"><img src={github} className ="imgStyle"></img></a> 
                                            <a href="https://www.facebook.com/profile.php?id=100009058988839"><img src={facebook} className ="imgStyle"></img></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={kamal} class="img-fluid" alt="Manmeet Juneja" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Kamal Nouri</h4>
                                            <span>Full Stack Developer</span>
                                            <ul>
                                            <li>Design FrontEnd with (ReactJS)</li>
                                                <li>Design BackEnd with (NodeJs)</li>
                                                <li>Manage Database (MongoDB)</li>
                                            </ul>
                                        </div>
                                        <div className ="divStyle">
                                            <a href="https://www.linkedin.com/in/kamal-nouri-0716b4141/"><img src={linkedin} className ="imgStyle"></img></a> 
                                            <a href="https://github.com/kamal-nouri"><img src={github} className ="imgStyle"></img></a> 
                                            <a href="https://www.facebook.com/kamal.alnouri"><img src={facebook} className ="imgStyle"></img></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={alex} class="img-fluid" alt="Sarwesh Chitambre" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Alexander Barghouti</h4>
                                            <span>Full Stack Developer</span>
                                            <ul>
                                            <li>Design FrontEnd with (ReactJS)</li>
                                                <li>Design BackEnd with (NodeJs)</li>
                                                <li>Manage Database (MongoDB)</li>
                                            </ul>
                                        </div>
                                        <div className ="divStyle">
                                            <a href="https://www.linkedin.com/in/alexander-barghouti-78b838103/"><img src={linkedin} className ="imgStyle"></img></a> 
                                            <a href="https://github.com/alexbarg3000"><img src={github} className ="imgStyle"></img></a> 
                                            <a href="https://www.facebook.com"><img src={facebook} className ="imgStyle"></img></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-3">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div class="pic"><img src={manar} class="img-fluid" alt="Shakshi Maheshwari" /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div class="member-info">
                                            <h4>Manar Hasan</h4>
                                            <span>Full Stack Developer</span>
                                            <ul>
                                            <li>Design FrontEnd with (ReactJS)</li>
                                                <li>Design BackEnd with (NodeJs)</li>
                                                <li>Manage Database (MongoDB)</li>
                                            </ul>
                                        </div>
                                        <div className ="divStyle">
                                            <a href="https://www.linkedin.com/in/manar-hasan-b6b508138/"><img src={linkedin} className ="imgStyle"></img></a> 
                                            <a href="https://github.com/ManarHasan"><img src={github} className ="imgStyle"></img></a> 
                                            <a href="https://www.facebook.com/manar.hasan.5268"><img src={facebook} className ="imgStyle"></img></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Booking Health</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class='bx bxs-up-arrow-alt bx-fade-down'></i></a>
        </div>
    )
}

export default AboutUs;