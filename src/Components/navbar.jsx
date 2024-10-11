import { useState } from "react";
import "../assets/css/Nav.css";
import AboutUs from './AboutUs';
import GFS from "../assets/img/GFS.jpg";
function Navbar() {
  const About = <AboutUs></AboutUs>;
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className="shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* School Logo */}
          <div id="logo" className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-brown-dark flex items-center space-x-2" >
              <img src={GFS} alt="Logo" className="logo" />
              <span>Great Foundation Schools</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-brown-dark hover:text-brown">
              Home
            </a>
            <a href="#about" className="text-brown-dark hover:text-brown">
              About Us
            </a>
            <a href="#academics" className="text-brown-dark hover:text-brown">
              Academics
            </a>
            <a href="#admissions" className="text-brown-dark hover:text-brown">
              Admissions
            </a>
            <a href="#contact" className="text-brown-dark hover:text-brown">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-brown-dark focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-brown-dark hover:bg-brown-light"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-brown-dark hover:bg-brown-light"
          >
            About Us
          </a>
          <a
            href="#academics"
            className="block px-4 py-2 text-brown-dark hover:bg-brown-light"
          >
            Academics
          </a>
          <a
            href="#admissions"
            className="block px-4 py-2 text-brown-dark hover:bg-brown-light"
          >
            Admissions
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-brown-dark hover:bg-brown-light"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
