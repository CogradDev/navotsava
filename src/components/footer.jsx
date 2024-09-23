import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-500 via-blue-400 to-green-500 text-white py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
          {/* Company Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-wider">Navotsav 2024</h2>
            <p className="text-sm mt-2">Connect. Collaborate. Contribute.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=61560781570736"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://x.com/UPjnvopenmeet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/upstatenavodayaalumniopenmeet/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@UPStateNavodayaAlumniOpenMeet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        <hr className="border-gray-400 my-6 md:my-10" />

        <div className="text-center text-md text-gray-50">
          <p>
            &copy; Made with love by{"  "}
            <a
              href="https://cograd.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-blue-700 transition duration-200"
            >
              Cograd.
            </a>
            <p>(A Navodayans' Initiative)</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
