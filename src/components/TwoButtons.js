import "./TwoButtons.css"
import { Button } from "react-bootstrap";
function TwoButtons(){
return (
<div className="mb-2">
    <Button variant="primary" href="/Help" size="lg">
      Donate Now
    </Button>{' '}
    <Button variant="primary" size="lg">
      Watch video
    </Button>
  </div>
  );
}
  export default TwoButtons;