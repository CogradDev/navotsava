import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full bg-blue-600 py-6 flex justify-center">
      <div className="flex space-x-8 items-center">
        {[
          {
            href: "https://www.facebook.com/profile.php?id=61560781570736",
            icon: <FaFacebookF />,
          },
          {
            href: "https://x.com/UPjnvopenmeet",
            icon: <FaTwitter />,
          },
          {
            href: "https://www.instagram.com/upstatenavodayaalumniopenmeet/",
            icon: <FaInstagram />,
          },
          {
            href: "https://www.youtube.com/@UPStateNavodayaAlumniOpenMeet",
            icon: <FaYoutube />,
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white text-3xl hover:text-gray-200 transition duration-200 animate-bounce${
              index % 2 === 0 ? "1" : "2"
            }`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCarousel;
