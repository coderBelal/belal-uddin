import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
 
const Footer = () => {
  return (
    <footer className="  text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section with navigation and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Brand name */}
          <h1   className="text-purple-600 text-2xl md:text-xl font-bold mb-3">BELAL UDDIN</h1>
          
          {/* Navigation links */}
          <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <Link
              to="/"
              className="text-[#513F73] text-base font-semibold hover:border-b-2 border-purple-600 dark:text-white hover:text-purple-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className="text-[#513F73] text-base font-semibold hover:border-b-2 border-purple-600 dark:text-white hover:text-purple-600"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-[#513F73] text-base font-semibold hover:border-b-2 border-purple-600 dark:text-white hover:text-purple-600"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#513F73] text-base font-semibold hover:border-b-2 border-purple-600 dark:text-white hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
          </ul>

          {/* Social media icons */}
          <div className="flex space-x-4">
            <a   href="https://github.com/coderBelal"  target="_blank" rel="noopener noreferrer" className=" text-purple-700 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a         href="https://www.linkedin.com/in/belal-uddin-99733229a/"   target="_blank" rel="noopener noreferrer" className=" text-purple-700 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a    onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
          target="_blank"
          rel="noopener noreferrer"    className="text-purple-700 hover:text-white">
              <FaWhatsapp size={20} />
            </a>
            <a    href="https://www.facebook.com/devbelal10/"  target="_blank" rel="noopener noreferrer" className=" text-purple-700 hover:text-white">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom section with copyright */}
        <div className="text-center">
          <p className=" text-purple-700  text-sm">
            &copy; {new Date().getFullYear()} BELAL UDDIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
