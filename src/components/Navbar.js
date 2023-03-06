import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarComponent({ links, page, setPage }) {
  const allLinks = links.map((link, index) => (
    <Nav.Item as="li" key={link}>
      <Nav.Link href={`/${link.toLowerCase().split(" ").join("")}`}>
        {link}
      </Nav.Link>
    </Nav.Item>
  ));
  return (
    <Navbar expand="lg" bg="primary">
      <Nav
        id="navbar"
        className="justify-content-end"
        defaultActiveKey="/Home"
        as="ul"
      >
        <Navbar.Brand href="/home">
          <Nav.Link className="text-white">Seguidores de Jesus</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          {allLinks}
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
