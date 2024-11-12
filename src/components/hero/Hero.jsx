 
import { FaLinkedin, FaGithub,  FaDownload } from 'react-icons/fa';
 

const Hero = () => {
  
  const handleAlerm=()=>{
     alert("updating...")
  }
  return (
    <section className='  mx-auto  max-w-7xl'>  <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-6 dark:bg-[#0F0715]">
    {/* Left side - Text content */}
    <div className="text-center md:text-left md:w-1/2 px-4 md:px-8">
      <h1 data-aos="zoom-in" className="text-2xl lg:text-5xl font-bold  text-[#513F73] dark:text-white tracking-wide">
        I am Belal Uddin
      </h1>
      <h2 data-aos="zoom-in" className="text-2xl font-sora lg:text-6xl font-semibold text-purple-800 dark:text-purple-600 mt-2 tracking-wider">
        Front End Developer
      </h2>
      <p data-aos="zoom-in" className="text-gray-700 text-lg   dark:text-gray-300 mt-4 leading-relaxed">
        I am a web developer with over 0 years of experience, recognized as a
        practical and effective developer. I lead cross-functional teams in
        time-pressured settings to complete projects on schedule and within
        budget.
      </p>

      {/* Buttons */}
      <div onClick={handleAlerm}  data-aos="fade-right"  className="flex justify-center md:justify-start mt-6 space-x-4">
        <li
         
          className="flex items-center px-6 py-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-600 text-lg tracking-wide"
        >
          <FaDownload className="mr-2" /> Download CV
        </li>
      </div>

      {/* Social icons */}
      <div data-aos="zoom-in" className="flex justify-center md:justify-start mt-6 space-x-6">
        <a        href="https://www.linkedin.com/in/belal-uddin-99733229a/"
          target="_blank" className="text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-500">
          <FaLinkedin size={28} />
        </a>
        <a     href="https://github.com/coderBelal"     target="_blank" className="text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-500">
          <FaGithub size={28} />
        </a>
      
      </div>
    </div>

    {/* Right side - Image */}
    <div data-aos="zoom-out" className="md:w-1/2 flex justify-center mb-8 md:mb-0">
      <img
        src="https://i.postimg.cc/sDDJWMvk/Picsart-24-11-10-22-53-33-698.jpg"
        alt="Belal Uddin"
        className="h-48 w-48 lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-lg shadow-lg object-cover"
      />
    </div>
  </div></section>
  
  );
};

export default Hero;
