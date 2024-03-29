// import "./App.css";
import React, { useState, useEffect } from "react";
import { navbar as links } from "./data.js";
import { videos as indVideos } from "./data.js";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar.js";
import Home from "./containers/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurMission from "./components/OurMission";
import Videos from "./components/Videos";
import Announcements from "./components/Announcements.js";
import Footer from "./components/Footer.js";
import Calendar from "./components/Calendar.js";

function App() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [videos, setVideos] = useState(indVideos);

  

  return (
    <div className="App">
      <NavbarComponent
        links={links}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
        <Route path="/mission" element={<OurMission />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/videos" element={<Videos videos={videos} />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Will need the event.preventDefault to change the
