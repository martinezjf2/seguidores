import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../logo-transparent-png.png";

export default function Footer() {
  return (
    <footer id="footer-section">
      <Card style={{ width: "25%", float: "left", border: "none" }}>
        <Card.Body id="footer-logo">
          <img src={logo} width="180px" />
        </Card.Body>
      </Card>
      <Card style={{ width: "25%", float: "left", border: "none" }}>
        <Card.Body>
          <a href="/home">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/ourmission">Our Mission</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "25%", float: "left", border: "none" }}>
        <Card.Body>
          <a href="/contactus">Contact Us</a>
          <a href="/videos">Videos</a>
          <a href="/testimonials">Testimonials</a>
        </Card.Body>
      </Card>
      <Card style={{ width: "25%", float: "left", border: "none" }}>
        <Card.Body>
          <a href="/announcements">Announcements</a>
          <a href="/dailyverse">Daily Verse</a>
          <a href="https://www.youtube.com">Subscribe to our channel</a>
        </Card.Body>
      </Card>
    </footer>
  );
}
