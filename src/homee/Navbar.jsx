import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isErbilPage = location.pathname === '/erbil';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full ${isErbilPage ? '' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex-shrink-0">
            <img
              src="src/assets/images/logo.png"
              className="h-16 w-16 sm:h-20 sm:w-20"
              alt="Logo"
            />
          </Link>
          <h1 className="text-xl font-bold text-white sm:text-2xl">
            <Link to="/">InKurdistan</Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-4 text-base font-medium text-white sm:flex sm:space-x-6 sm:text-lg">
          {isHomePage ? (
            <>
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#city" className="hover:text-white">
                  City
                </a>
              </li>
              <li>
                <a href="#Attraction" className="hover:text-white">
                  Attraction
                </a>
              </li>
              <li>
                <a href="#Culture&History" className="hover:text-white">
                  Culture & History
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-white">
                  About
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  City
                </Link>
              </li>
              <li>
                <Link to="/attraction" className="hover:text-white">
                  Attraction
                </Link>
              </li>
              <li>
                <Link to="/Culture&History" className="hover:text-white">
                  Culture & History
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
            </>
          )}
          <li>
            <button className="ml-4 rounded-full bg-blue-700 px-3 py-1.5 text-sm hover:bg-transparent sm:ml-6 sm:px-4 sm:py-2 sm:text-base">
              Login/sign
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="text-white sm:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-black/90 py-4 opacity-90 hover:text-white sm:hidden">
            <ul className="space-y-4 text-center text-lg text-white">
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
                <button className="rounded-full bg-blue-700 px-4 py-2">
                  Login/sign
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
