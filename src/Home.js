import './App.css';
import mainphoto from "./components/images/empowerment.jpg";
import CarouselPage from "./components/Carousel";
import NavbarPage from "./components/NavbarPage.js";
import TwoButtons from './components/TwoButtons.js';
import DescriptionPage from "./components/DescriptionPage.js";
import Internphoto from "./components/Internphoto.js";
import CausesPage from "./components/CausesPage.js";
import SuccessPage from "./components/SuccessPage.js";
import MainHeading from "./components/MainHeading.js";
import Testimonial from './components/Testimonial.js';
import CollabCollege from './components/CollabCollege.js';
import MeetOurTeam from "./components/MeetOurTeam.js";
import TopButton from "./components/TopButton.js";

function Home() {
  return (
    <>
        <TopButton/>
    <div class="owncontainer">
      <MainHeading/>
      <div class="slides"><CarouselPage/></div>
      <div class="twobuttonspage"><TwoButtons/></div>
      <DescriptionPage/>
      <Internphoto/>
      <div className="changecolouryellow">
        <CausesPage/>
        <SuccessPage/>
        <Testimonial/>
        <MeetOurTeam/>
        <CollabCollege/>
      </div>
        
    </div>
    </>
  );
}

export default Home;