import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetTeam = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 1000, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-orange-200 via-white to-green-200 antialiased py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-orange-500 mb-8 md:mb-12">
          Meet the Team
        </h1>

        <Slider {...settings}>
          {/* Connect Section */}
          <div className="px-3">
            <div className="rounded-lg bg-blue-700 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/main.jpg" alt="" />
            </div>
          </div>

          {/* Collaborate Section */}
          <div className="px-3">
            <div className="rounded-lg bg-purple-700 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/stage.jpg" alt="" />
            </div>
          </div>

          {/* Contribute Section */}
          <div className="px-3">
            <div className="rounded-lg bg-yellow-400 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/registeration.jpg" alt="" />
            </div>
          </div>

          {/* Additional sections */}
          <div className="px-3">
            <div className="rounded-lg bg-red-600 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/discipline.jpg" alt="" />
            </div>
          </div>

          <div className="px-3">
            <div className="rounded-lg bg-blue-200 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/venue.jpg" alt="" />
            </div>
          </div>

          <div className="px-3">
            <div className="rounded-lg bg-teal-700 p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/food.jpg" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MeetTeam;
