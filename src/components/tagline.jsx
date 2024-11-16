import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Tagline = () => {
  const navigate = useNavigate();
  const deadline = new Date("2024-11-16");
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  useEffect(() => {
    const today = new Date();
    if (today > deadline) {
      setIsRegistrationOpen(false);
    }
  }, []);

  const handleNavigation = () => {
    navigate("/idcard");
  };
  const handleEvent = () => {
    navigate("/live");
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background GIF for large and small screens */}
      <div className="absolute inset-0">
        <img
          src="./Navotsav.gif"
          alt="Event Background"
          className="hidden sm:block w-full h-full object-cover"
        />
        <img
          src="./mobile.gif"
          alt="Mobile Event Background"
          className="block sm:hidden w-full h-full object-cover"
        />
      </div>

      {/* Logo (Positioned at the top on mobile, shifted right on larger screens) */}
      <div className="absolute top-2 left-0 sm:top-2 sm:left-36 p-4">
        <img
          src="./logonewwithoutbg.png"
          alt="Event Logo"
          className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
        />
      </div>

      {/* Navotsav and 2024 (shifted to the top) */}
      <div className="relative text-center px-4 md:px-6 lg:px-8 z-10 mt-8 sm:mt-12">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-times text-white"
          style={{
            textShadow:
              "0 0 10px rgba(255, 153, 51, 0.8), 0 0 20px rgba(255, 153, 51, 0.8)",
          }}
        >
          Navotsav
        </h1>
        <h1
          className="text-4xl font-medium sm:text-5xl md:text-6xl mb-32 sm:mb-48"
          style={{ color: "rgb(255, 153, 51)" }} // Saffron color for 2024
        >
          2024
        </h1>
      </div>

      {/* Main Tagline (with fixed 96px distance from 2024) */}
      <div className="relative flex flex-col items-center z-10 mt-48">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
          <span className="text-orange-500">Connect.</span>
          <span className="text-blue-500"> Collaborate.</span>
          <span className="text-green-500"> Contribute.</span>
        </h1>

        {/* CTA Button and Deadline Message */}
        {isRegistrationOpen ? (
          <>
            <button
              onClick={handleNavigation}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 "
            >
              Register Now
            </button>
            <p className="text-red-600 mt-8 sm:mt-4 text-2xl ">
              {/* Register Before : {deadline.toDateString()} */}
            </p>
          </>
        ) : (
          <p className="text-red-500 text-lg">Registration Closed</p>
        )}
        <button
          onClick={handleEvent}
          className="bg-blue-600 mt-3 mb-3 hover:bg-blue-700 text-white py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 "
        >
          See Live Event
        </button>
      </div>
    </section>
  );
};
