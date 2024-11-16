import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./All.jsx";
import Appy from "./components/idCard.jsx";
import LivePage from "./components/live.jsx";
import { YouTubeURLProvider } from "./components/YoutubeContext.jsx";
import YouTubeURLPage from "./components/YoutubeURLPage.jsx";

const App = () => {
  return (
    <YouTubeURLProvider>
      <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/idcard" element={<Appy />} />
          <Route path="/youtube-url" element={<YouTubeURLPage />} />
        </Routes>
      </Router>
    </YouTubeURLProvider>
  );
};

export default App;
