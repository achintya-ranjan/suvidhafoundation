import "./Footer.css";
function Footer()
{
    return (
        <div className="Footerpage">
        <footer>
            <div className="footercontainer">
                <div className="sec aboutus">
                    <h2>Suvidha Foundation<br></br> (Suvidha Mahila Mandal)</h2>
                    <p>Office Headquarters -<br></br>
                            Nagpur Headquarter:<br></br>
                            Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner<br></br> Nagpur, Maharashtra 441102
                            <br></br>
                            Hyderabad Headquarter:<br></br>
                            Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
                    </p>
                    <ul className="sci">    
                        <li><a href="https://www.facebook.com/suvidhamahilamandal/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/suvidha_mahila_mandal" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/suvidha-foundation/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2>Certificates</h2>
                    <ul>
                        <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf">80G Certificate</a></li>
                        <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf">12A Certificate</a></li>
                        <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF">CSR Certificate</a></li>
                        <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf">Suvidha Darpan Registration</a></li>
                        <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf">Suvidha Pan Card</a></li>
                    </ul>

                </div>
                <div className="sec quicklinks">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><a href="https://suvidhafoundationedutech.org/verify.php">Verify Your Certificate</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="copyrightText">
            <p>Suvidha Foundation (Suvidha Mahila Mandal), All Right Reserved.<br></br>By Suvidha Foundation</p>
        </div>
        </div>
    );
}
export default Footer;