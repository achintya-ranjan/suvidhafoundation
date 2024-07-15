import Home from "./Home.js";
import Helpus from "./Helpus.js";
import Contactus from "./Contactus.js";
import Events from "./Events.js";
import "./App.css";
import Gallery from "./Gallery.js";
import Footer from "./Footer.js";
import NavbarPage from "./NavbarPage.js";
import {BrowserRouter , Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <NavbarPage/>
      <Routes>
        <Route path="/suvidhafoundation" element={<Home/>}/>
        <Route path="/suvidhafoundation/Help" element={<Helpus/>}/>
        <Route path="/suvidhafoundation/Events" element={<Events/>}/>
        <Route path="/suvidhafoundation/Gallery" element={<Gallery/>}/>
        <Route path="/suvidhafoundation/Contact" element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;