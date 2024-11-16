import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./All.jsx";
import Appy from "./components/idCard.jsx";
import "./App.css";
import LivePage from "./components/live.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/live" element={<LivePage />} />
        {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
        <Route path="/idcard" element={<Appy />} />
      </Routes>
    </Router>
  );
};

export default App;
