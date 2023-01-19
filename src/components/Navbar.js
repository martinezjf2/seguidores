import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarComponent({ links, page, setPage }) {
  // function handleClick(e) {
  //   e.preventDefault();
  // }
  const allLinks = links.map((link, index) => (
    <Nav.Item
      as="li"
      key={link}
      // value={page} onClick={handleClick}
    >
      <NavLink href={`/${link.toLowerCase().split(" ").join("")}`}>
        {link}
      </NavLink>
    </Nav.Item>
  ));
  return (
    <Nav
      id="navbar"
      className="justify-content-center"
      defaultActiveKey="/Home"
      as="ul"
    >
      {allLinks}
    </Nav>
  );
}
