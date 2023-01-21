// import "./App.css";
import React, { useState, useEffect } from "react";
import { navbar as links } from "./data.js";
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

function App() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [videos, setVideos] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((data) => data.json())
      .then((json) => setVideos(json));
  }, []);

  // For Fetching Announcements from the db.json
  // useEffect(() => {
  //   fetch("http://localhost:3000/announcements")
  //     .then((data) => data.json())
  //     .then((json) => setAnnouncements(json));
  // }, []);

  return (
    <div className="App">
      <NavbarComponent
        links={links}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/videos" element={<Videos videos={videos} />} />
        <Route
          path="/announcements"
          element={<Announcements announcements={announcements} />}
        />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Will need the event.preventDefault to change the
