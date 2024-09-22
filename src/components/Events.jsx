import React from "react";
import { FaMapMarkedAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const EventDetails = () => {
  return (
    <section className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Event Header */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Div: Text Details */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center text-center md:text-left">
            <div className="mb-12 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                ABOUT THE MEET
              </h1>
              <p className="text-blue-800 text-lg sm:text-xl lg:text-2xl">
                Join us for a grand reunion, meet fellow alumni, and relive the
                golden days!
              </p>
            </div>

            <div className="space-y-6">
              {/* Mandal */}
              <div className="flex justify-center md:justify-start items-center space-x-4">
                <div className="text-3xl sm:text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaMapMarkedAlt />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-800">
                  <span className="font-bold">Meerut Mandal</span>
                </div>
              </div>

              {/* Time */}
              <div className="flex justify-center md:justify-start items-center space-x-4">
                <div className="text-3xl sm:text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaClock />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-800">
                  <span className="font-semibold">Time:</span> 09:00 AM - 5:00
                  PM
                </div>
              </div>

              {/* Venue */}
              <div className="flex justify-center md:justify-start items-center space-x-4">
                <div className="text-3xl sm:text-4xl text-blue-500 transition-transform duration-300 transform hover:scale-110">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-800">
                  <span className="font-semibold">Venue:</span> Gautam Buddha
                  University, Greater Noida (U.P.)
                </div>
              </div>
            </div>
          </div>

          {/* Right Div: Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative overflow-hidden rounded-full h-52 w-52 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <img
                src="/event.jpg"
                alt="Event"
                className="w-full h-full object-cover border-2 rounded-full border-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
