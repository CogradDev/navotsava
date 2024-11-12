import React from "react";

const ApplyForAward = () => {
  return (
    <div className="w-full mx-auto p-6 bg-gradient-to-r from-orange-200 via-white to-green-200 text-gray-900 shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 ">
      {/* Right Section: Award Information */}
      <div className="md:w-1/2 w-full text-center md:text-center">
        <h2 className="text-4xl lg:text-center  font-extrabold mb-4 text-orange-600">
          Navotsav Yatra
        </h2>
        <p className="text-lg  mb-6 text-gray-700">
          The Navotsava Yatra was an inspiring journey where our team traveled
          across 76 Jawahar Navodaya Vidyalayas (JNVs) in Uttar Pradesh to
          personally deliver invitations for the upcoming Navotsava celebration.
          This unique yatra was not only a way to formally invite alumni,
          teachers, and students but also to reconnect with the Navodaya
          community and rekindle the spirit of unity, collaboration, and pride
          among its members. Through each visit, the team engaged with school
          leaders, shared the vision for Navotsava, and encouraged participation
          in this event, which celebrates the achievements and contributions of
          Navodaya alumni. The journey embodied the Navodaya spirit, fostering a
          deep sense of connection and anticipation for the event, where past
          and present Navodayans can come together to share experiences, learn,
          and contribute towards future endeavors.
        </p>

        <a
          href="https://docs.google.com/spreadsheets/d/1MPK_x7unLiiDrXP_-eIk6UIwDjQ9fRYv2q-vZPL1CLk/edit?usp=sharing"
          download="Navodaya-Ratna-Award.doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-orange-300">
            Look for your friends
          </button>
        </a>
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
