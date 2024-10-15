import React from "react";

export const Tagline = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Logo (Positioned at the top on mobile, left on larger screens) */}
      <div className="absolute top-4 left-4 sm:top-2 sm:left-24 p-4">
        <img
          src="./logo.png"
          alt="Event Logo"
          className="w-22 h-24 object-cover sm:w-32 sm:h-36"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-center px-6 space-y-6 z-10">
        <div className="mb-64 md:mb-80 sm:mb-64">
          <h1
            className="text-6xl font-extrabold font-times sm:text-8xl mb-4 text-white"
            style={{
              textShadow:
                "0 0 10px rgba(255, 153, 51, 0.8), 0 0 20px rgba(255, 153, 51, 0.8)", // Saffron shadow
            }}
          >
            Navotsav
          </h1>
          <h1 className="text-3xl font-medium sm:text-4xl md:text-5xl md:mb-8 sm:mb-12 text-orange-500">
            2024
          </h1>
        </div>

        {/* Main Tagline */}
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold">
          <span className="text-orange-500">Connect.</span>
          <span className="text-blue-500"> Collaborate.</span>
          <span className="text-green-500"> Contribute.</span>
        </h1>

        {/* CTA Button */}
        <a
          href="https://id-card-generator-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-6 sm:mt-8">
            Register Now
          </button>
        </a>

        {/* Decorative Line */}
        <div className="h-1 w-32 sm:w-40 mx-auto bg-blue-600 rounded-lg"></div>
      </div>
    </section>
  );
};
