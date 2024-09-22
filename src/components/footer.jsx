import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-500 via-blue-400 to-green-500 text-white py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
          {/* Company Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-wider">Navotsav 2024</h2>
            <p className="text-sm mt-2">Empowering digital experiences</p>
          </div>

          {/* Quick Links */}
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="/" className="hover:text-gray-200 transition duration-200">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-200 transition duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-gray-200 transition duration-200"
            >
              Contact
            </a>
            <a
              href="/services"
              className="hover:text-gray-200 transition duration-200"
            >
              Services
            </a>
          </div> */}

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        <hr className="border-gray-400 my-6 md:my-10" />

        <div className="text-center text-sm text-gray-200">
          <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
