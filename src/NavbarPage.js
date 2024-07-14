import suvidha from "./components/images/suvidhalogo.png";
import "./NavbarPage.css";
function NavbarPage()
{
    return(
        <nav className="navbarpage">
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo"><img src={suvidha} alt=""/></label>
            <ul>
                <li><a className="homenav"href="#">Apply for Internship</a></li>
                <li><a href="#">Help Now</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Our Donors</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavbarPage;