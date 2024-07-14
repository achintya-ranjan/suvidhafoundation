import mainphoto from "./images/empowerment.jpg";
import "./MainHeading.css";
function MainHeading()
{
    return (
    <div class="heading">
        <img src={mainphoto} style={{height:"400px",width:"400px"}}alt=".."/>
        <h1>SUVIDHA FOUNDATION</h1>
        <p>Bringing smiles to millions</p>
    </div>
    );
}
export default MainHeading;