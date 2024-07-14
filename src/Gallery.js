import galleryhead from "./components/images/gallery/galleryhead.jpg";
import gallery1 from "./components/images/gallery/gallery1.jpg";
import gallery2 from "./components/images/gallery/gallery2.jpg";
import gallery3 from "./components/images/gallery/gallery3.jpg";
import gallery4 from "./components/images/gallery/gallery4.jpg";
import gallery5 from "./components/images/gallery/gallery5.jpg";
import gallery6 from "./components/images/gallery/gallery6.jpg";
import gallery7 from "./components/images/gallery/gallery7.jpg";
import gallery8 from "./components/images/gallery/gallery8.jpg";
import gallery9 from "./components/images/gallery/gallery9.jpg";
import gallery10 from "./components/images/gallery/gallery10.jpg";
import gallery11 from "./components/images/gallery/gallery11.jpg";
import "./Gallery.css";
function Gallery()
{
    return (
        <div className="gallerypage">
            <div className="gallerywrapper">
                    <div className="galleryimage">
                        <img src={galleryhead} alt="gallery" className="galleryus"/>
                        <div class="gallerycontent">
                            <h1>Gallery</h1>
                        </div>
                    </div>
            </div>
            <h3>Our Gallery</h3>
            <h1>Moments of Impact: Capturing the Journey of Our NGO</h1>
            <div className="gallerypics">
                <div className="gallerypicelement">
                    <img src={gallery1} alt=""/>
                    <h3>FREE WORKSHOPS</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery2} alt=""/>
                    <h3>BOOKS DISTRIBUTION</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery3} alt=""/>
                    <h3>ONLINE gallery</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery4} alt=""/>
                    <h3>CLOTH DISTRIBUTION</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery5} alt=""/>
                    <h3>TREE PLANTATION</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery6} alt=""/>
                    <h3>FREE EDUCATION</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery7} alt=""/>
                    <h3>WOMEN'S DAY</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery8} alt=""/>
                    <h3>FOOD DISTRIBUTION</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery9} alt=""/>
                    <h3>SUVIDHA gallery</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery10} alt=""/>
                    <h3>EMPOWERING WOMEN</h3>
                </div>
                <div className="gallerypicelement">
                    <img src={gallery11} alt=""/>
                    <h3>ANIMAL FEEDING</h3>
                </div>

            </div>
        </div>
    );
}
export default Gallery;