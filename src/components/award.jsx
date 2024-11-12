import React from "react";

const ApplyForAward = () => {
  return (
    <div className="w-full mx-auto p-6 mt-4 bg-gradient-to-r from-orange-200 via-white to-green-200 text-gray-900 shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 ">
      {/* Right Section: Award Information */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-4xl lg:text-center  font-extrabold mb-4 text-green-800">
          Navotsav 2024 Award
        </h2>
        {/* <p className="text-lg mb-6 text-gray-700">
          This award celebrates excellence in various fields, from the arts to sciences and beyond. Honorees are individuals who have
          achieved remarkable milestones in their careers, showcasing innovation, leadership, and commitment to their profession.
          Their achievements elevate their fields and inspire others to strive for greatness. We encourage nominations for individuals
          who exemplify these qualities and have made a notable impact. Together, let's honour those who are making a difference
          and continue to inspire future generations.
          Please write to us at <strong className="text-orange-600">awards@navotsava.in</strong> along with the document.
        </p> */}

        {/* Apply Button
        <a href='/Navodaya-Ratna-Award.docx' download="Navodaya-Ratna-Award.doc" target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-orange-300">
            Download Document
          </button>
        </a> */}
      </div>
      {/* Left Section: Award Image */}
      <div className="md:w-1/2 w-full  flex justify-center">
        <img
          src="/yatra1.jpg" // Placeholder image URL, replace with actual award image
          alt="Navotsav 2024 Award"
          className="rounded-lg border-2 border-orange-500  w-64 h-72 md:w-80 md:h-96 "
        />
      </div>
    </div>
  );
};

export default ApplyForAward;
