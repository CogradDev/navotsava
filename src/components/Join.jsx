import React from "react";

const Join = () => {
  const handleButtonClick = () => {
    window.location.href = "https://navjobs.in";
  };

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 text-gray-900 shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 ">
      {/* Left Section: Award Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/Join.jpg" // Placeholder image URL, replace with actual award image
          alt="Navotsav Join"
          className="rounded-lg w-64 h-72 md:w-80 md:h-96"
        />
      </div>

      {/* Right Section: Award Information */}
      <div className="md:w-1/2 w-full text-center md:text-center">
        <h2 className="text-4xl lg:text-center font-extrabold mb-4 text-green-800">
          Join Us
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          We are excited to invite your candidature to participate in our
          upcoming Job Fair! This event offers a fantastic opportunity to
          connect with top employers across various industries, explore career
          options, and showcase your skills. Whether you are actively seeking a
          new role or looking to network, the Job Fair provides a platform for
          both experienced professionals and recent graduates. Don’t miss out on
          this chance to take the next step in your career. Please submit your
          resume and register today to secure your spot. We look forward to
          seeing you there!
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-green-300"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Join;
