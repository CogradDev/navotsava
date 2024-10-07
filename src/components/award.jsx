import React from "react";

const ApplyForAward = () => {
  return (
    <div className="w-full mx-auto p-6 mt-4 bg-gradient-to-r from-orange-200 via-white to-green-200 text-gray-900 shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 ">
      {/* Left Section: Award Image */}
      <div className="md:w-1/2 w-full  flex justify-center">
        <img
          src="/yatra1.jpg" // Placeholder image URL, replace with actual award image
          alt="Navotsav 2024 Award"
          className="rounded-lg border-2 border-orange-500  w-64 h-72 md:w-80 md:h-96 "
        />
      </div>

      {/* Right Section: Award Information */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-4xl font-extrabold mb-4 text-green-800">
          Navotsav 2024 Award
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          The <strong className="text-orange-600">Navotsav 2024 Award</strong>{" "}
          celebrates the most innovative and transformative projects in
          technology, design, and sustainability. This prestigious award honors
          creators who have made groundbreaking contributions in their
          respective fields. Don’t miss your chance to showcase your innovation
          and be a part of Navotsav's legacy!
        </p>

        {/* Apply Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-orange-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ApplyForAward;
