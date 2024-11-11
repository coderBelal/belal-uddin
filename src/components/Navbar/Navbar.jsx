import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between p-5 dark:bg-[#0F0715] relative z-50">
        {/* Logo */}
        <div className="text-purple-600 text-2xl md:text-xl font-bold">BELAL UDDIN</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center z-50">
          {['Home', 'Works',   'Skills',   'Contact'].map((item) => (
            <button
              key={item}
              className="text-[#513F73] text-base font-semibold hover:border-b-2 border-purple-600 dark:text-white hover:text-purple-600"
            >
              {item}
            </button>
          ))}
          <a   onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
          target="_blank"
          rel="noopener noreferrer">
                <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-800 rounded-full dark:bg-gradient-to-r dark:from-purple-800 dark:to-purple-900">
            Hire me!
          </button>
          </a>
      

          {/* Toggle Switch */}
          <div className="flex items-center space-x-2">
            <span className="text-[#513F73] dark:text-white text-base font-semibold">
              {theme === "light" ? "Light" : "Dark"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-purple-600 peer-checked:dark:bg-purple-800 relative transition-colors duration-300">
                <span
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : ""}`}
                />
              </div>
            </label>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-600 dark:text-white">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`fixed top-12 right-0 w-full h-full bg-white dark:bg-[#0F0715] bg-opacity-90 dark:bg-opacity-90 p-5 flex flex-col items-center space-y-4 md:hidden 
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} 
          duration-300 ease-in-out z-40`}
        >
          { ['Home', 'Works',   'Skills',   'Contact'].map((item) => (
            <button key={item} className="text-[#513F73] text-lg font-semibold hover:text-purple-600 dark:text-white">
              {item}
            </button>
          ))}
          <a   onClick={() => window.open('https://wa.me/+8801568885065', '_blank')}
          target="_blank"
          rel="noopener noreferrer">
                <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-800 rounded-full dark:bg-gradient-to-r dark:from-purple-800 dark:to-purple-900">
            Hire me!
          </button>
          </a>
      
          <label className="flex items-center space-x-2">
            <span className="text-[#513F73] dark:text-white text-lg font-semibold">
              {theme === "light" ? "Light" : "Dark"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-purple-600 peer-checked:dark:bg-purple-800 relative transition-colors duration-300">
                <span
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : ""}`}
                />
              </div>
            </label>
          </label>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
