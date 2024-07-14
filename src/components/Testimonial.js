import "./Testimonial.css";
import harshika from "./images/harshika.jpg";
import priyanka from "./images/priyanka.jpg";
import varsha from "./images/varsha.jpg";
import { Button } from "react-bootstrap";
function Testimonial(){
    return (
        <div className="testimonial">
                <h2>Testimonial</h2>
                <h1>What people are talking about our charity activities</h1>
                <div className="testimonial_id">
                    <img src={harshika} alt=""/>
                    <img src={varsha} alt=""/>
                    <img src={priyanka} alt=""/>
                </div>
                <Button  className="ViewAll" variant="primary" size="lg" href="https://drive.google.com/drive/u/1/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8" target="_blank">
                    View All
                </Button>  
    </div>
);}
export default Testimonial;