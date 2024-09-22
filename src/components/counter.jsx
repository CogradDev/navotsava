import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-17T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10 py-6 bg-gradient-to-r from-white via-blue-300 to-white rounded-lg shadow-lg">
      {/* Left Side Text */}
      <div className="flex flex-col text-blue-600 font-semibold mb-4 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl mb-2">Conference Date</h2>
        <p className="text-lg md:text-xl">Count Every Second Until the Event</p>
      </div>

      {/* Timer Display */}
      <div className="flex flex-wrap justify-center md:justify-end space-x-4 items-center">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
          const value =
            timeLeft[label.toLowerCase()] || (label === "Days" ? "0" : "00");
          return (
            <div
              key={index}
              className="bg-blue-600 rounded-lg px-3 py-2 md:px-6 md:py-4 shadow-lg transform hover:scale-105 transition duration-300 text-center mx-2 my-2"
            >
              <span className="text-4xl font-bold text-white">{value}</span>
              <span className="block text-sm text-gray-100">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownTimer;
