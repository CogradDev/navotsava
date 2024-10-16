import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tagline } from "./components/tagline.jsx";
import { EventDetails } from "./components/Events.jsx";
// import {FeedbackForm}from "./components/feebackForm"
import All from "./All.jsx";
import Appy from "./components/idCard.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/event" element={<EventDetails />} />
        {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
        <Route path="/idcard" element={<Appy />} />
      </Routes>
    </Router>
  );
};

export default App;
