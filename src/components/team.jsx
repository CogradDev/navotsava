import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    position: "Project Manager",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
  {
    name: "Bob Smith",
    position: "Frontend Developer",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
  {
    name: "Charlie Brown",
    position: "Backend Developer",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
  {
    name: "David Wilson",
    position: "UI/UX Designer",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
  {
    name: "David Wilson",
    position: "UI/UX Designer",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
  {
    name: "David Wilson",
    position: "UI/UX Designer",
    photo:
      "https://i0.wp.com/blog.10times.com/wp-content/uploads/2022/05/speaker.jpg?resize=1296%2C700&ssl=1",
  },
];

const TeamMembers = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-12 md:mb-24">
          {/* Small "Agenda" text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Eminent Guests
          </h2>
          {/* Gradient Line (hidden on small screens) */}
          <div className="hidden md:flex flex-grow h-1 mx-12 sm:mx-24 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500"></div>
          {/* Large "Agenda" text, hidden on small screens */}
          <h2 className="hidden md:block text-6xl lg:text-8xl font-bold text-gray-200">
            Guests
          </h2>
        </div>
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
