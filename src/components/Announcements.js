import React from "react";
import Announcement from "./Announcement";

export default function Announcements({ announcements }) {
  
  const allAnnouncements = announcements.map((obj) => <Announcement />);

  return <div id="announcements">{allAnnouncements}</div>;
}
