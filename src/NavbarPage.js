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
            <label className="logo"><a href="/" ><img src={suvidha} alt=""/></a></label>
            <ul>
                <li><a className="homenav" href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank">Apply for Internship</a></li>
                <li><a href="/Help">Help Now</a></li>
                <li><a href="/Events">Events</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/">Our Donors</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavbarPage;