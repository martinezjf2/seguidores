import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Need to create a calendar for the entire year on googlge seguidores de jesus account,
// for the entire community. and paste it in here so everyone can see and view the calendar

export default function Calendar() {
  return (
    <div id="calendar">
      <div id="personalInfo">
        <h3>Calendario Parroqial de St.Kilian</h3>
        <p>485 Conklin St</p>
        <p>Farmingdale, New York</p>
      </div>

      <iframe
        title="stkilianEvents"
        src="https://calendar.google.com/calendar/embed?src=4236f76ede532a28fd8ca6e5900cbab64a47b82f80b03737ac0a6641569e6b16%40group.calendar.google.com&ctz=America%2FNew_York"
        frameborder="0"
      />
    </div>
  );
}
