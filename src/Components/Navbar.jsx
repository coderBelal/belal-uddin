import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaClipboardList, FaCertificate, FaPhoneAlt } from 'react-icons/fa';
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark or light mode styles based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = ' #111827'; // Light mode background
      document.documentElement.classList.remove('dark');
    } else {
   
      document.body.style.backgroundColor = '#000000';
      document.documentElement.classList.add('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className={`p-8 h-16 ${isDarkMode ? 'bg-[#10E956]' : ' bg-[#0A0A0A]'} dark:text-white flex items-center justify-center text-gray-300 fixed top-6 left-1/2 transform -translate-x-1/2 mx-auto max-w-fit rounded-xl z-50`}>
        {/* Navbar Links */}
        <ul className="flex space-x-7">
        

          <li className="flex text-white items-center">
            <Link to="/" className="hidden md:flex text-lg">Home</Link>
            <Link to="/" className="md:hidden">
              <FaHome className="text-lg" />
            </Link>
          </li>
          <li className="flex text-white items-center">
            <Link to="/skill" className="hidden md:flex text-lg">Skills</Link>
            <Link to="/skill" className="md:hidden">
              <FaStar className="text-lg" />
            </Link>
          </li>
          <li className="flex text-white items-center">
            <Link to="/work" className="hidden md:flex text-lg">Projects</Link>
            <Link to="/work" className="md:hidden">
              <FaClipboardList className="text-lg" />
            </Link>
          </li>
          {/* <li className="flex text-white items-center">
            <Link to="/certificate" className="hidden md:flex text-lg">Certificate</Link>
            <Link to="/certificate" className="md:hidden">
              <FaCertificate className="text-lg" />
            </Link>
          </li> */}
          <li className="flex text-white items-center">
            <Link to="/contact" className="hidden md:flex text-lg">Contact</Link>
            <Link to="/contact" className="md:hidden">
              <FaPhoneAlt className="text-lg" />
            </Link>
          </li>
          <button
            className={`min-h-screen  flex items-center justify-center transition-colors text-white duration-500`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ?  (<CiLight className=' text-2xl mr-4'/>):  (<IoMoonOutline className='  text-xl mr-4'/>)}  
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
