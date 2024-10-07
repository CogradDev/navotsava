import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { Tagline } from "./components/tagline.jsx";
import { EventAgenda } from "./components/agenda.jsx";

import FeedbackForm from "./components/feedBackForm.jsx";
import TeamMembers from "./components/team.jsx";
import { EventDetails } from "./components/Events.jsx";
import Payment from "./components/payment.jsx";
import Moto from "./components/moto.jsx";
import Footer from "./components/footer.jsx";
import MeetTeam from "./components/meetteam.jsx";
import CountdownTimer from "./components/counter.jsx";
import ApplyForAward from "./components/award.jsx";
import RoutePlan from "./components/routeplan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tagline />
    <CountdownTimer />
    <Moto />
    <EventDetails />
    <RoutePlan />
    <ApplyForAward />
    <EventAgenda />
    <TeamMembers />
    <MeetTeam />
    <Payment />
    <FeedbackForm />
    <Footer />
  </StrictMode>
);
