// import "./App.css";
import React, { useState } from "react";
import { navbar as links } from "./data.js";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurMission from "./components/OurMission";
import Videos from "./components/Videos";

function App() {
  const [page, setPage] = useState("/home");

  return (
    <div className="App">
      <NavbarComponent links={links} page={page} setPage={setPage} />
      <header className="App-header">
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

// Will need the event.preventDefault to change the
