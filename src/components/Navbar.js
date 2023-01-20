import React from "react";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";

export default function NavbarComponent({ links, page, setPage }) {
  const allLinks = links.map((link, index) => (
    <Nav.Item as="li" key={link}>
      <Nav.Link href={`/${link.toLowerCase().split(" ").join("")}`}>
        {link}
      </Nav.Link>
    </Nav.Item>
  ));
  return (
    <Nav
      id="navbar"
      className="justify-content-center"
      defaultActiveKey="/Home"
      as="ul"
    >
      {/* <Navbar.Brand href="/home">
        <img
          id="brand-logo"
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Seguidores de Jesus"
        />
      </Navbar.Brand> */}
      {allLinks}
    </Nav>
  );
}

{
  /* <Container>
      <Navbar.Brand id="brand-logo" href="/home" src={logo}></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav
          id="navbar"
          className="justify-content-center"
          defaultActiveKey="/Home"
          as="ul"
        >
          {allLinks}
        </Nav>
      </Navbar.Collapse>
    </Container> */
}
