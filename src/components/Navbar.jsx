// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-sky-700 text-white sticky z-50 top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CareConnect</h1>
        <nav>
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/service" className="hover:text-gray-300">Services</a></li>
            <li><a href="/login" className="hover:text-gray-300">Login</a></li>
            <li><a href="/register" className="hover:text-gray-300">Register</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" id="mobile-menu-button">
            {/* Icon for mobile menu (hamburger icon) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Search Caretakers</a></li>
          <li><a href="#" className="hover:text-gray-300">Login/Register</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
