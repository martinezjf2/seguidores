import React from "react";
import logo from "../images/logo-transparent-png.png";

export default function OurMission() {
  return (
    <div id="mission">
      <h2>Nuestra Mission</h2>
      <div id="img-div">
        <img
          id="brand-logo"
          src={logo}
          width="600rem"
          height="500rem"
          alt="Seguidores de Jesus"
        />
      </div>
    </div>
  );
}
