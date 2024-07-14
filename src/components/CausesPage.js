import React from "react";
import plant from "./images/plant.jpg";
import social from "./images/social.jpg";
import education from "./images/education.jpg";
import vegetable from "./images/vegetable.jpg";
import kids from "./images/kids.jpg";
import health from "./images/health.jpg";
import "./CausesPage.css";
function CausesPage()
{
    return(
        <div class="Causes">
            <div class="CausesSubheading">
                <h3>What We Do?</h3>
            </div>  
            <div class="CausesHeading">
                <h2>Causes for a Sustainable Future</h2>
            </div>
            <div class="CausesInfo">
                <div class="CausesName">
                    <div class="row1">
                        <div><img src={vegetable} alt="HealthyFood"/><p><span>Healthy Food</span><br/>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p></div>
                        <div><img src={social} alt="SocialAwareneess"/><p><span>Social Awareneess</span><br/>We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.</p></div>
                        <div><img src={plant} alt="TreePlantation"/><p><span>Tree Plantation</span><br/>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p></div>
                    </div>
                    <div class="row2">
                        <div><img src={health} alt="HealthCare"/><p><span>Health Care</span><br/>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.</p></div>
                        <div><img src={education} alt="PrimaryEducation"/><p><span>Primary Education</span><br/>By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</p></div>
                        <div><img src={kids} alt="SocialCare"/><p><span>Social Care</span><br/>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CausesPage;