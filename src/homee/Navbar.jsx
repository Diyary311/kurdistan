import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import './navbar.css';

const Navbar = () => {
  const location = useLocation(); // Get the current path
  const isHomePage = location.pathname === '/'; // Check if it's Home page
  const isErbilPage = location.pathname === '/erbil'; // Check if it's Erbil page

  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all ${
        isErbilPage ? '' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="src/assets/images/logo.png "
              className="flex h-20 w-20"
              alt="Logo"
            />
          </Link>

          <h1 className="text-2xl font-bold text-white">
            <Link to="/">InKurdistan</Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-6 text-lg font-medium text-white sm:flex">
          {isHomePage ? (
            <>
              <li>
                <a href="#home" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#city" className="transition hover:text-white">
                  City
                </a>
              </li>
              <li>
                <a href="#Attraction" className="transition hover:text-white">
                  Attraction
                </a>
              </li>
              <li>
                <a
                  href="#Culture&History"
                  className="transition hover:text-white"
                >
                  Culture & History
                </a>
              </li>
              <li>
                <a href="#About" className="transition hover:text-white">
                  About
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="transition hover:text-white">
                  City
                </Link>
              </li>
              <li>
                <Link to="/attraction" className="transition hover:text-white">
                  Attraction
                </Link>
              </li>
              <li>
                <Link
                  to="/Culture&History"
                  className="transition hover:text-white"
                >
                  Culture & History
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
            </>
          )}
          <li>
            <button
              className="ml-6 rounded-full bg-blue-700 px-4 py-2 text-white transition-all duration-300 hover:border-blue-50 hover:bg-transparent sm:rounded-full"
              onClick={() => window.location.href = '/Login_Admin/login.html'}
            >
              Login/Sign
            </button>

          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="text-2xl text-white sm:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="py-4 text-center text-white sm:hidden">
          <ul className="space-y-4 text-lg">
            {isHomePage ? (
              <>
                <li>
                  <a href="#home" onClick={toggleMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#city" onClick={toggleMenu}>
                    City
                  </a>
                </li>
                <li>
                  <a href="#Attraction" onClick={toggleMenu}>
                    Attraction
                  </a>
                </li>
                <li>
                  <a href="#Culture&History" onClick={toggleMenu}>
                    Culture & History
                  </a>
                </li>
                <li>
                  <a href="#About" onClick={toggleMenu}>
                    About
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/city" onClick={toggleMenu}>
                    City
                  </Link>
                </li>
                <li>
                  <Link to="/attraction" onClick={toggleMenu}>
                    Attraction
                  </Link>
                </li>
                <li>
                  <Link to="/Culture&History" onClick={toggleMenu}>
                    Culture & History
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
              </>
            )}
            <li>
              <button
                className="rounded-full bg-blue-700 px-4 py-2"
                onClick={toggleMenu}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
