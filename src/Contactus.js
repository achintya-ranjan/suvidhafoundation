import contactus from "./components/images/contactus3.jpg";
import sendmessage from "./components/images/sendmessage.webp";
import "./Contactus.css";
import { Button } from "react-bootstrap";

function Contactus()
{
    return (<div className="contactus">
                <div className="contactwrapper">
                    <div className="contactimage">
                        <img src={contactus} className="contactus"/>
                        <div class="contactcontent">
                            <h1>CONTACT US</h1>
                        </div>
                    </div>
                </div>
                <h3>Get in Touch</h3>
                <h2>Contact in any query</h2>

                <div class="messagewrapper">
                    <img src={sendmessage} alt="sendmessage" class="sendmessage"/>
                    <div class="messagecontent">
                        <Button  className="Sendmessage" variant="primary" size="lg" href="https://colorhunt.co/" target="_blank">
                            Send Message
                        </Button>  
                    </div>
                </div>
            </div>
    );
}
export default Contactus;