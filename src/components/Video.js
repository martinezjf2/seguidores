import React from "react";

export default function Video({ video }) {
  const { link, name, description, date } = video;

  console.log(link);

  return (
    <div id="video">
      <h3>{name}</h3>
      <iframe src={link} allowFullScreen />
      <figcaption>{date}</figcaption>
    </div>
  );
}
