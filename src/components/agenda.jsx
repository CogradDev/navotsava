import React from "react";

export const EventAgenda = () => {
  const agendaItems = [
    { time: "16.11.2024, Saturday", isDate: true },
    {
      time: "14:00-20:00",
      title: "Registration",
      description:
        "Welcoming & registration activity for all participants at counters",
    },
    {
      time: "15:00-20:00",
      title: "Art & Craft Exhibition, Job Fair & Showbiz",
      description:
        "Exhibition showcasing creativity in art, business, and placement opportunities",
    },
    {
      time: "17:30-18:00",
      title: "High Tea",
      description: "Tea with snacks served at counter",
    },
    {
      time: "17:00-19:00",
      title: "Business Session",
      description: "Business session in auditorium",
    },
    { time: "19:00-22:00", title: "Musical & Cultural Night", description: "" },
    {
      time: "",
      title: "Jhankar Beats",
      description: "Performance by live energetic band by Navodaya alumnus",
    },
    {
      time: "",
      title: "Madhosh",
      description: "Kavi Sammelan & Mushaira by Navodaya family members",
    },
    {
      time: "21:00 onwards",
      title: "Dinner",
      description: "Served at designated place",
    },
    { time: "17.11.2024, Sunday", isDate: true },
    {
      time: "8:30 Onwards",
      title: "Registration",
      description:
        "Welcoming & registration activity for all participants at counters",
    },
    {
      time: "8:00-10:00",
      title: "Breakfast",
      description: "To be served at designated place",
    },
    {
      time: "10:00-10:30",
      title: "Address by Alumni",
      description: "5 different speakers, 5 minutes each",
    },
    {
      time: "10:30-10:45",
      title: "Lighting of Lamp & Invocation",
      description:
        "Lighting of lamp by Available Guest duly assisted by Special Guests",
    },
    {
      time: "10:45-11:00",
      title: "Saraswati Vandana",
      description: "Saraswati Vandana Group Song",
    },
    {
      time: "11:00-11:15",
      title: "Welcome of Guests",
      description:
        "Welcome of all participants, chief guest & other dignitaries",
    },
    {
      time: "11:15-11:25",
      title: "Welcome Address",
      description: "By representative of organization committee",
    },
    {
      time: "11:25-10:40",
      title: "Introduction & facilitation of guests",
      description:
        "Facilitation of Teachers & Principals by offering them shawls etc",
    },
    {
      time: "10:40-10:50",
      title: "Navodaya Song",
      description: "To be sung by all with AV effect on screen",
    },
    {
      time: "10:50-11:00",
      title: "Screening of Film",
      description: "Documentary film on Navodaya Vidyalaya",
    },
    {
      time: "11:00-11:15",
      title: "Objective & Address",
      description: "Address by representative of organizing committee",
    },
    {
      time: "11:15-11:30",
      title: "Video Screening",
      description: "Journey of Navotsava - Saga of Alumni Open Meet",
    },
    {
      time: "11:30-11:50",
      title: "Address by Guests-1",
      description: "3 speakers, 5 minutes each",
    },
    {
      time: "11:50-12:00",
      title: "Cultural Programs-1",
      description: "Flute by Sunil Sargam",
    },
    {
      time: "12:05-12:20",
      title: "Award Ceremony",
      description: "Awarding state toppers in various categories",
    },
    {
      time: "12:20-12:30",
      title: "Cultural Programs-2",
      description: "Local Folk Dance",
    },
    {
      time: "12:20-12:40",
      title: "Address by Alumnus -1",
      description: "Exclusive topics by alumni speakers",
    },
    {
      time: "12:40-13:00",
      title: "Cultural Programs-3",
      description: "Dance/Music/Singing program",
    },
    {
      time: "13:00-16:00",
      title: "Group wise lunch",
      description: "Lunch Counter Open",
    },
    {
      time: "13:00-13:15",
      title: "Navodaya Family",
      description: "Presentation on notable Navodaya family members",
    },
    {
      time: "13:15-13:30",
      title: "Achievers Award",
      description:
        "Launching of Navodaya Job App, Connect App, Alumni Logo unveiling",
    },
    {
      time: "13:30-13:40",
      title: "Presentation PPT",
      description:
        "Brief note on Alumni Association journey; Key achievements & accomplishments of different mandals",
    },
    {
      time: "14:10-14:30",
      title: "Address by Alumnus-2",
      description: "Exclusive topics by alumnus speakers",
    },
    {
      time: "14:30-14:40",
      title: "Chief Guest Speech",
      description: "Address by Chief Guest",
    },
    {
      time: "14:40-15:00",
      title: "Welcome of guests (came later)",
      description: "Offering flower & shawls etc.",
    },
    {
      time: "15:00-15:15",
      title: "Cultural Programs-5",
      description: "Dance/Music/Singing program",
    },
    {
      time: "15:15-15:30",
      title: "Address by Guests/Alumnus",
      description: "Speeches by Guests/NVS/Alumni",
    },
    {
      time: "15:30-15:40",
      title: "Thanksgiving Address",
      description: "Thanksgiving address by a key speaker",
    },
    {
      time: "15:40-15:55",
      title: "Facilitation",
      description: "Recognition of Organization Committee & Key Contributors",
    },
    {
      time: "15:55-16:05",
      title: "Cake Cutting Ceremony",
      description: "99 Pass-out Batch Silver Jubilee celebration",
    },
    {
      time: "16:05-16:30",
      title: "Photo Session",
      description: "Photo session for 99 Batch and Mandal-wise groups",
    },
    {
      time: "16:30-16:40",
      title: "Baton Handover to new host",
      description: "Passing torch and SOPs to new host",
    },
    { time: "16:40 onwards", title: "Masti/Leisure", description: "" },
  ];

  return (
    <section className="bg-gray-100 text-green-800 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center mb-12 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-700">
            Program Schedule
          </h2>
          <div className="hidden md:flex flex-grow h-1 mx-8 sm:mx-24 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500"></div>
          <h2 className="hidden md:block text-6xl lg:text-8xl font-bold text-gray-200">
            Schedule
          </h2>
        </div>

        <div className="space-y-4">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 p-4 sm:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-2 
                ${
                  item.isDate
                    ? "bg-green-100 text-green-900 font-bold text-center"
                    : "bg-white hover:bg-green-50"
                }`}
            >
              {item.isDate ? (
                <span className="col-span-3 text-lg sm:text-xl font-bold">
                  {item.time}
                </span>
              ) : (
                <>
                  <span className="text-base sm:text-lg font-semibold text-green-600 text-center">
                    {item.time}
                  </span>
                  <span className="text-base sm:text-lg text-center font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 text-center">
                    {item.description}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
