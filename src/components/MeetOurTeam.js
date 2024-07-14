import "./MeetOurTeam.css";
import { Button } from "react-bootstrap";
import bharti from "./images/bharti.jpg";
import shobha from "./images/shobha.jpeg";
import payal from "./images/payal.jpg";
import nilima from "./images/nilima.jpg";
function MeetOurTeam(){
    return (
        <div className="teams_main_container">
            <h2>Meet Our Team</h2>
            <h1>Girls behind our charity activities</h1>
            <div className="meetourteam">
                    <div className="teams_container">
                        <img src={shobha} alt="shobha" className="mem_image"/>
                        <div class="mem_overlay">
                            <h1>Shobha Motghare</h1>
                            <h2>Secretary</h2>
                            <Button  className="mem_button" variant="primary" size="lg" href="https://www.linkedin.com/in/shobha-motghare-0a6a57238/" target="_blank">
                                ln
                            </Button>                          
                        </div>
                    </div>
                    <div class="teams_container">
                        <img src={payal} alt="payal" className="mem_image"/>
                        <div class="mem_overlay">
                            <h1>Payal Badhe</h1>
                            <h2>President</h2>
                            <Button  className="mem_button" variant="primary" size="lg" href="https://www.linkedin.com/in/payal-badhe-531756aa/" target="_blank">
                                ln
                            </Button>    
                        </div>
                    </div>
                    <div class="teams_container">
                        <img src={bharti} alt="bharti" className="mem_image"/>
                        <div class="mem_overlay">
                            <h1>Bharti Shendre</h1>
                            <h2>Treasurer</h2>
                        </div>
                    </div>
                    <div class="teams_container">
                        <img src={nilima} alt="nilima" className="mem_image"/>
                        <div class="mem_overlay">
                            <h1>Nilima Kalambe</h1>
                            <h2>Advisor</h2>
                        </div>
                    </div>
        </div>
    </div>
);}
export default MeetOurTeam;

