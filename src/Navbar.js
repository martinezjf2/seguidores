import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent({ links }) {
  console.log(links);
  const allLinks = links.map((link, index) => (
    <Nav.Item as="li">
      <Nav.Link href={link}>{link}</Nav.Link>
    </Nav.Item>
  ));
  return (
    <Nav
      id="navbar"
      className="justify-content-center"
      defaultActiveKey="/home"
      as="ul"
    >
      {allLinks}
    </Nav>
  );
}
