import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        {/*Menu Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* navbar for desktop */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="text-white hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* navbar for mobile*/}
        <div
          className={`lg:hidden absolute top-0 right-0 w-64 bg-gray-800 h-screen transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            <li>
              <Link
                to="/"
                className="text-white text-2xl py-4 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/product"
                className="text-white text-2xl py-4 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-white text-2xl py-4 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white text-2xl py-4 hover:text-gray-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white text-2xl py-4 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
