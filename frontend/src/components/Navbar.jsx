// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -70, // Adjust for fixed headers if necessary
      duration: 500,
    });
  };
  return (
    <header className="bg-sky-700 text-white sticky z-50 top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CareConnect</h1>
        <nav>
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><Link to="/"onClick={()=>scrollToSection("home")}  className="hover:text-gray-300">Home</Link></li>
            <li><Link to="#about" onClick={()=>scrollToSection("about")}  className="hover:text-gray-300">About</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            <li><Link to="#contact" onClick={()=>scrollToSection("contact")}  className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {/* Icon for mobile menu (hamburger icon) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="#about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/search" className="hover:text-gray-300">Search Caretakers</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
          <li><Link to="#contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
