import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Experience from "../components/Experience/Experience"
import Hero from "../components/hero/Hero"
import Project from "../components/Project/Project"
import Skill from "../components/Skill/Skill"
 
 

const Home = () => {
  return (
    <div> 
      <Hero/>
  <About/>
 <Experience/>
 <Project/>
 <Skill/>
 <Contact/>
  
    </div>
  )
}

export default Home