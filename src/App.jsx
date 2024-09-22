import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tagline } from "./components/tagline.jsx";
import { EventDetails } from "./components/Events.jsx";
// import {FeedbackForm}from "./components/feebackForm"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tagline />} />
        <Route path="/event" element={<EventDetails />} />
        {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
