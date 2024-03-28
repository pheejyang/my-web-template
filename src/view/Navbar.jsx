// Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={toggleMenu} className="text-white text-2xl" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-white text-2xl" />
          )}
        </div>

        {/* Responsive Menu */}
        <div className={`lg:flex lg:items-center ${menuOpen ? 'flex' : 'hidden'}`}>
          <ul className="lg:flex space-x-4">
            <li className="text-white hover:underline ">Home</li>
            <li className="text-white hover:underline ">About</li>
            <li className="text-white hover:underline ">Services</li>
            <li className="text-white hover:underline ">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
