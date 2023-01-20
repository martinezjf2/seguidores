import React from "react";
import Video from "./Video";

export default function Videos({ videos }) {
  const allVideos = videos.map((video, index) => {
    return (
      <div key={index}>
        <Video video={video} />
      </div>
    );
  });

  return (
    <div id="videos-section">
      <h2 id="videos-heading">Ven Y Goza Con Nosotros</h2>
      <div id="videos">{allVideos}</div>
    </div>
  );
}

// Add the slicing method here to display only 6 videos within the videos-section container
