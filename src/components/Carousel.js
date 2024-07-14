import React,{useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import suvidha from "./images/suvidhalogo.png";
import lion from "./images/lion.png";
import night from "./images/night.jpg";
import suvidha4 from "./images/suvidha4.jpg";
import suvidha3 from "./images/suvidha3.jpg";
import suvidha1 from "./images/suvidha1.jpg";
import suvidha5 from "./images/suvidha5.jpg";
import "./Carousel.css";
function CarouselPage() {
  
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="maincarousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={suvidha4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>77th Independence Day Celebration</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            
              className="d-block w-100"
              src={suvidha1}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Bringing Smiles to Millions</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={suvidha3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Get your Donations Tax Exempted</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={suvidha4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
    

export default CarouselPage;