import {Navbar,Nav,Container,Button,Form,FormControl} from "react-bootstrap";
import navbarimage from "./images/navbarimage10.jpg";

import "./NavbarPage.css"
function NavbarPage()
{
    return (
      <div className="homenavbar">
      <nav class="navbar navbar-expand-lg fixed-top">

      <div class="container-fluid">
        <a class="navbar-brand me-auto" href="#">Logo</a>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="login-button">Login</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </div>
    ); 
}
export default NavbarPage;