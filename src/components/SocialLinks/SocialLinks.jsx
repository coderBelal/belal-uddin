import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center mt-12 w-full ">
      <div    data-aos="zoom-in" className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full  border-t border-purple-700">
        <a
          href="https://github.com/coderBelal"
          target="_blank"
     
          rel="noopener noreferrer"
          className="  w-full md:w-48 h-24 flex justify-center items-center rounded-lg   transition duration-300 shadow-lg"
        >
          <FaGithub size={40} className="dark:text-white mr-2" />
          <span className="dark:text-white    text-2xl font-semibold">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/belal-uddin-99733229a/"
          target="_blank"
          rel="noopener noreferrer"
          className="   w-full md:w-48 h-24 flex justify-center items-center rounded-lg    transition duration-300 shadow-lg"
        >
          <FaLinkedin size={40} className="dark:text-white text-blue-600 mr-2" />
          <span className="dark:text-white text-blue-700 text-2xl font-semibold">LinkedIn</span>
        </a>

        <a
      
          onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
          target="_blank"
          rel="noopener noreferrer"
          className="   w-full md:w-48 h-24 flex justify-center items-center rounded-lg   transition duration-300 shadow-lg"
        >
          <FaWhatsapp size={40} className="dark:text-white text-green-700 mr-2" />
          <span className="dark:text-white text-green-700 text-2xl font-semibold">WhatsApp</span>
        </a>

        <a
          href="https://www.facebook.com/devbelal10/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-48 h-24 flex justify-center items-center rounded-lg    transition duration-300 shadow-lg"
        >
          <FaFacebook size={40} className="dark:text-white text-blue-700 mr-2" />
          <span className="dark:text-white text-blue-700 text-2xl font-semibold">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;