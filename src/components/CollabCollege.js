import upescollege from "./images/upescollege.jpg";
import jindalcollege from "./images/jindalcollege.jpg";
import raisonicollege from "./images/raisonicollege.jpg";
import "./CollabCollege.css";
function CollabCollege()
{
    return (
        <div class="colleges">
            <h1>Empowering Change Together: Our Collaborative Initiatives</h1>
            <div className="collabcollege">
                <img src={upescollege} alt="upes"/>
                <img src={jindalcollege} alt="jindal"/>
                <img src={raisonicollege} alt="rasiosni"/>
            </div>
        </div>
    );
}
export default CollabCollege;