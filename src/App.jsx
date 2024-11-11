 
import { useEffect } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/Experience/Experience"
import Home from "./components/hero/Home"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Project/Project"
import Skill from "./components/Skill/Skill"
import SocialLinks from "./components/SocialLinks/SocialLinks"
import { ThemeProvider } from "./context/ThemeContext"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
 
 
 const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
   return (
  

   
   <ThemeProvider>
      <div className=" overflow-x-hidden">
 <Navbar/>
  <Home/>
  <About/>
  <Experience/>
  <Project/>
  <Skill/>
  <Contact/>
  <SocialLinks/>
  </div>
   </ThemeProvider>
 
 
   )
 }
 
 export default App
 