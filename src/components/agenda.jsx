import React from "react";

export const EventAgenda = () => {
  const agendaItems = [
    { time: "09:00 AM - 10:00 AM", title: "Registration and Welcome" },
    { time: "10:00 AM - 11:00 AM", title: "Opening Ceremony" },
    { time: "11:00 AM - 12:30 PM", title: "Keynote Speech by Alumni" },
    { time: "12:30 PM - 01:30 PM", title: "Networking Lunch" },
    {
      time: "01:30 PM - 03:00 PM",
      title: "Panel Discussion: Alumni Success Stories",
    },
    { time: "03:00 PM - 04:00 PM", title: "Workshops and Breakout Sessions" },
    { time: "04:00 PM - 05:00 PM", title: "Closing Remarks and Future Plans" },
    { time: "05:00 PM", title: "Networking and Departure" },
  ];

  return (
    <section className="bg-green-100 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-12 md:mb-24">
          {/* Small "Agenda" text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800">
            Agenda
          </h2>
          {/* Gradient Line (hidden on small screens) */}
          <div className="hidden md:flex flex-grow h-1 mx-12 sm:mx-24 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500"></div>
          {/* Large "Agenda" text, hidden on small screens */}
          <h2 className="hidden md:block text-6xl lg:text-8xl font-bold text-gray-200">
            Agenda
          </h2>
        </div>

        {/* Agenda Items */}
        <div className="space-y-6">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:bg-indigo-50"
            >
              <span className="text-lg sm:text-xl font-semibold text-green-600">
                {item.time}
              </span>
              <span className="text-lg sm:text-xl text-gray-800">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
