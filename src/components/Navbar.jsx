import React, { useState, useEffect } from "react";
import logoImage from "../img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white fixed top-0 left-0 right-0 z-50 shadow-lg"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={logoImage} alt="RCSTL Logo" className="h-12 w-auto mr-4" />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
            data-aos="fade-left"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                className="transition-all duration-300 ease-in-out"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="#Home" data-aos="fade-down" data-aos-delay="100">
              Home
            </NavLink>
            <NavLink href="#About" data-aos="fade-down" data-aos-delay="200">
              About
            </NavLink>
            <NavLink href="#Contact" data-aos="fade-down" data-aos-delay="300">
              Contact
            </NavLink>
            <NavLink href="#Donation" data-aos="fade-down" data-aos-delay="400">
              Donation
            </NavLink>
            <NavLink href="#Speakers" data-aos="fade-down" data-aos-delay="500">
              Speakers
            </NavLink>
            <NavLink href="#Board" data-aos="fade-down" data-aos-delay="500">
              Board
            </NavLink>
            <NavLink
              href="https://lakeofdreams.org/"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Retreats
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              href="#Home"
              mobile
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Home
            </NavLink>
            <NavLink
              href="#About"
              mobile
              data-aos="fade-right"
              data-aos-delay="200"
            >
              About
            </NavLink>
            <NavLink
              href="#Contact"
              mobile
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Contact
            </NavLink>
            <NavLink
              href="#Donation"
              mobile
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Donation
            </NavLink>
            <NavLink
              href="#Speakers"
              mobile
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Speakers
            </NavLink>
            <NavLink
              href="#Retreats"
              mobile
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Retreats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile, ...props }) => {
  const baseClasses = "text-white transition duration-300 ease-in-out";
  const mobileClasses = "block px-3 py-2 rounded-md text-base font-medium";
  const desktopClasses =
    "text-sm uppercase tracking-wider font-semibold hover:text-gray-200 hover:underline";

  return (
    <a
      href={href}
      className={`${baseClasses} ${
        mobile ? mobileClasses : desktopClasses
      } transform hover:scale-105`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Navbar;
