import React, { createContext, useState, useEffect } from "react";

export const YouTubeURLContext = createContext();

export const YouTubeURLProvider = ({ children }) => {
  const [youtubeURL, setYouTubeURL] = useState("");

  useEffect(() => {
    const storedURL = localStorage.getItem("youtubeURL");
    if (storedURL) {
      setYouTubeURL(storedURL);
    }
  }, []);

  const updateYouTubeURL = (url) => {
    setYouTubeURL(url);
    localStorage.setItem("youtubeURL", url);
  };

  return (
    <YouTubeURLContext.Provider value={{ youtubeURL, updateYouTubeURL }}>
      {children}
    </YouTubeURLContext.Provider>
  );
};
