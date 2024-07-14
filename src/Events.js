import Eventshead from "./components/images/Events/Eventshead.png";
import Events1 from "./components/images/Events/Events1.jpg";
import Events2 from "./components/images/Events/Events2.jpg";
import Events3 from "./components/images/Events/Events3.jpg";
import Events4 from "./components/images/Events/Events4.jpg";
import Events5 from "./components/images/Events/Events5.jpg";
import Events6 from "./components/images/Events/Events6.jpg";
import Events7 from "./components/images/Events/Events7.jpg";
import Events8 from "./components/images/Events/Events8.jpg";

import "./Events.css";
function Events()
{
    return (
        <div className="Eventspage">
            <div className="Eventswrapper">
                    <div className="Eventsimage">
                        <img src={Eventshead} alt="Events" className="Eventsus"/>
                        <div class="Eventscontent">
                            <h1>Events</h1>
                        </div>
                    </div>
            </div>
            <h3>Events</h3>
            <h1>Our Charity Events: Celebrating Our Impact Together</h1>
            <div className="Eventspics">
                <div className="Eventspicelement">
                    <img src={Events1} alt=""/>
                    <h3>TREE PLANTATION</h3>
                    <p>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events2} alt=""/>
                    <h3>FUNDRAISING EVENTS</h3>
                    <p>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events3} alt=""/>
                    <h3>CLOTHS DISTRIBUTION</h3>
                    <p>Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events4} alt=""/>
                    <h3>WOMEN'S DAY</h3>
                    <p>Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events5} alt=""/>
                    <h3>Food Donation Initiatives by Our NGO</h3>
                    <p>Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events6} alt=""/>
                    <h3>Ensuring Happy and Healthy Animals through Feeding Programs</h3>
                    <p>Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events7} alt=""/>
                    <h3>Sanitary Pads Distribution</h3>
                    <p>Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.</p>
                </div>
                <div className="Eventspicelement">
                    <img src={Events8} alt=""/>
                    <h3>Free WorkshopsFree Workshops</h3>
                    <p>Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.</p>
                </div>
                

            </div>
        </div>
    );
}
export default Events;