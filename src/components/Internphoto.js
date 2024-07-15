import internship from "./images/internshipcartoon.png";
import "./Internphoto.css";
import React from "react";
import { Button } from "react-bootstrap";
function Internphoto()
{
    return(
    <div class="wrapper">
        <img src={internship} alt="internship" class="internpic"/>
        <div class="content">
            <h1>Apply for Internship</h1>
            <h3>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</h3>
            <h3>The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</h3>
                <Button  className="ApplyButton" variant="primary" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank">
                    Apply Now
                </Button>  

        </div>
    </div>);
}
export default Internphoto;