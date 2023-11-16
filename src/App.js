import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Footer from "./Components/Footer";

  
function App() {
  return (
    <>
    <Navbar />
    <Routes>
         <Route exact path="/home" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/menu" element={<Menu />} />
         <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
