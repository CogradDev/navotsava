import React, { useState, useContext, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { YouTubeURLContext } from "./YoutubeContext";

const LivePage = () => {
  const [isLiveError, setIsLiveError] = useState(false);
  const { youtubeURL } = useContext(YouTubeURLContext);
  const [embedURL, setEmbedURL] = useState("");

  useEffect(() => {
    if (youtubeURL) {
      const videoID = extractYouTubeID(youtubeURL);
      if (videoID) {
        setEmbedURL(`https://www.youtube.com/embed/${videoID}?autoplay=1`);
      } else {
        setIsLiveError(true);
      }
    } else {
      setIsLiveError(true);
    }
  }, [youtubeURL]);

  const extractYouTubeID = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleRetry = () => {
    setIsLiveError(false);
    if (youtubeURL) {
      const videoID = extractYouTubeID(youtubeURL);
      if (videoID) {
        setEmbedURL(`https://www.youtube.com/embed/${videoID}?autoplay=1`);
      } else {
        setIsLiveError(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-blue-400 to-green-500 flex flex-col items-center justify-between p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto ">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <img
            src="./logonewwithoutbg.png"
            alt="Event Logo"
            className="w-32 h-32 sm:w-36 sm:h-32 object-contain mx-auto sm:mx-0"
          />
        </div>
        <div className="text-center sm:text-left sm:ml-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
            Navotsav Live Event
          </h1>
        </div>
      </div>

      {/* Live Stream Section */}
      <div className="w-full h-96 max-w-6xl flex justify-center my-12">
        {isLiveError ? (
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Oops! Live Stream is Unavailable.
            </h2>
            <p className="text-gray-600 mb-6">
              We're experiencing some technical difficulties. Please retry in a
              moment.
            </p>
            <button
              onClick={handleRetry}
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              Retry
            </button>
          </div>
        ) : embedURL ? (
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative">
            <iframe
              className="w-full h-full"
              src={embedURL}
              title="YouTube Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setIsLiveError(true)}
            ></iframe>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              No YouTube URL Set
            </h2>
            <p className="text-gray-600 mb-6">
              Please set the YouTube URL on the "Set YouTube URL" page.
            </p>
            <button
              onClick={() => (window.location.href = "/set-url")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              Go to Set URL
            </button>
          </div>
        )}
      </div>

      {/* Social Media Links */}
      <footer className="w-full py-4">
        <p className="text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} Made with love by
        </p>
        <p
          className="text-center text-blue-700 text-lg cursor-pointer hover:underline mt-1 leading-tight"
          onClick={() => (window.location.href = "https://cograd.in")}
        >
          Cograd
        </p>
        <p className="text-center text-gray-200 text-sm mb-2">
          All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61560781570736",
              icon: <FaFacebookF />,
              label: "Facebook",
            },
            {
              href: "https://x.com/UPjnvopenmeet",
              icon: <FaTwitter />,
              label: "Twitter",
            },
            {
              href: "https://www.instagram.com/upstatenavodayaalumniopenmeet/",
              icon: <FaInstagram />,
              label: "Instagram",
            },
            {
              href: "https://www.youtube.com/@UPStateNavodayaAlumniOpenMeet",
              icon: <FaYoutube />,
              label: "YouTube",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-white text-2xl hover:text-gray-300 transition-transform duration-300 hover:scale-110"
            >
              <div className="p-4 bg-white bg-opacity-20 rounded-full shadow-lg">
                {social.icon}
              </div>
              <span className="text-sm md:text-base">{social.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LivePage;
