import suvidha from "./components/images/suvidhalogo.png";
import React from "react";
import "./NavbarPage.css";
function NavbarPage()
{
    return(
        <nav className="navbarpage">
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo"><a href="/suvidhafoundation/" ><img src={suvidha} alt=""/></a></label>
            <ul>
                <li><a className="homenav" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">Apply for Internship</a></li>
                <li><a href="/suvidhafoundation/Help">Help Now</a></li>
                <li><a href="/suvidhafoundation/Events">Events</a></li>
                <li><a href="/suvidhafoundation/Gallery">Gallery</a></li>
                <li><a href="/suvidhafoundation">Our Donors</a></li>
                <li><a href="/suvidhafoundation/Contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavbarPage;