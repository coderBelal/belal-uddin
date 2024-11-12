import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar/Navbar";
 
import { ThemeProvider } from "./context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./Home/Home";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation only once
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="overflow-x-hidden">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/works" element={<Project/>}  />
        <Route path="/skills" element={<Skill/>}  />
        <Route path="/contact" element={<Contact/>}  />
        </Routes>
     
     <Footer/>
         
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
