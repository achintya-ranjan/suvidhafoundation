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
        <Route path="/" element={<Home/>}/>
        <Route path="/Help" element={<Helpus/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;