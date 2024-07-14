import "./Helpus.css";
import helpuspicture from "./components/images/helpuspicture.png";
import qrcode from "./components/images/qrcode.jpg";
function Helpus()
{
    return(
        <div>
            <div className="helpwrapper">
                <div className="helpimage">
                    <img src={helpuspicture} className="helpus"/>
                    <div class="helpcontent">
                        <h1>HELP US</h1>
                    </div>
                </div>
            </div>
            <h1 className="accountdetails">ACCOUNT DETAILS</h1>
            <div className="accinfo">
                <div className="accinfo1">
                    <h2> For Indian Donors</h2>
                    <h3>Bank of Baroda</h3>
                    <h3>City: Nagpur</h3>
                    <h3>Contact No: +91 8010996763</h3>
                    <h3>Account Name: Suvidha Mahila Mandal</h3>
                    <h3>Suvidha Account No: 97840100027609</h3>
                    <h3>IFSC Code: BARB0DBKPAR</h3>
                </div>
                <div className="accinfo2">
                    <h2>QR Code</h2>
                    <img src={qrcode} alt="qrcode"/>
                </div>
            </div>
        </div>
    );
}
export default Helpus;