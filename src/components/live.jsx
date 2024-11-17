import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const LivePage = () => {
  // Redirect user to the YouTube live stream URL when they click the button
  const handleClickURL = () => {
    window.location.href =
      "https://www.youtube.com/live/wE9mc0Xssro?si=7BRv-iCE5LYRzt_V";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-blue-400 to-green-500 flex flex-col items-center justify-between p-6">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto mb-8">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <img
            src="./logonewwithoutbg.png"
            alt="Event Logo"
            className="w-32 h-32 sm:w-36 sm:h-32 object-contain mx-auto sm:mx-0"
          />
        </div>
        <div className="text-center sm:text-left sm:ml-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Navotsav Live Event
          </h1>
        </div>
      </header>

      {/* YouTube URL Section */}
      <div className="mt-6 text-center">
        <p className="text-white text-lg mb-4">Please click to watch:</p>
        <button
          onClick={handleClickURL}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Watch Live Stream
        </button>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-4 mt-8 bg-white bg-opacity-20 rounded-t-xl">
        <p className="text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Made with love by
        </p>
        <p
          className="text-center cursor-pointer mt-1 leading-tight"
          onClick={() => (window.location.href = "https://cograd.in")}
        >
          <img
            src="./cograd.png"
            alt="Cograd Logo"
            className="w-36 h-10 mx-auto hover:opacity-90 transition-opacity duration-300"
          />
        </p>
        <p className="text-center text-gray-300 text-sm mb-4">
          All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61560781570736",
              icon: <FaFacebookF />,
            },
            {
              href: "https://x.com/UPjnvopenmeet",
              icon: <FaTwitter />,
            },
            {
              href: "https://www.instagram.com/upstatenavodayaalumniopenmeet/",
              icon: <FaInstagram />,
            },
            {
              href: "https://www.youtube.com/@UPStateNavodayaAlumniOpenMeet",
              icon: <FaYoutube />,
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-white text-2xl hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <div className="p-4 bg-white bg-opacity-20 rounded-full shadow-lg">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LivePage;
