import {useState} from "react";
import "./DescriptionPage.css";
function DescriptionPage()
{
    const [descri,setDescri] =useState("Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.");
    function handleAboutClick()
    {
        setDescri("Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.");
    }
    function handleMissionClick()
    {
        setDescri("To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind. To Run Food Donation And Awareness Campaign In Rural Region.");
    }
    function handleVisionClick()
    {
        setDescri("To build Next Generation Entrepreneur, by providing them a Skill-Based Education. To Provide Internship, Training And Workshops and Quality Education All Over The World..");
    }
    return(
        <div class="descripage">
            <h3>Learn About Us</h3>
            <h2>Suvidha Foundation (Suvidha Mahila Mandal)</h2>
            <div class="lilnavbar">
                <div class="lilabout" onClick={handleAboutClick}><h4>About</h4></div>
                <div class="lilmission" onClick={handleMissionClick}><h4>Mission</h4></div>
                <div class="lilvision" onClick={handleVisionClick}><h4>Vision</h4></div>
            </div>
            <p>{descri}</p>
        </div>
    );
}
export default DescriptionPage;