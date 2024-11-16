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
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleRetry = () => {
    setIsLiveError(false);
    // Optionally, you can re-attempt to set the embedURL here
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
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-blue-400 to-green-500 flex flex-col items-center justify-between p-6">
      <header className="text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          🎥 Live Event
        </h1>
        <p className="text-lg lg:text-xl text-gray-100">
          Experience the excitement, join us live, and never miss a moment!
        </p>
      </header>

      {/* Live Stream Section */}
      <div className="w-full max-w-6xl flex justify-center my-8">
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
      <footer className="w-full py-6">
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
        <p className="mt-6 text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} Cograd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LivePage;