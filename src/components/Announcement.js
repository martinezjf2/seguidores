import React from "react";

export default function Announcement({ announcement }) {
  const { link, name, description, date } = announcement;

  console.log(link);

  return (
    <div id="announcement">
      <h3>{name}</h3>
      <iframe src={link} allowFullScreen />
      <figcaption>{date}</figcaption>
    </div>
  );
}
