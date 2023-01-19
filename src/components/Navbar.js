import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarComponent({ links, page, setPage }) {
  // function handleClick(e) {
  //   e.preventDefault();
  //   setPage(e.target.innerText.toLowerCase().split(" ").join(""));
  // }
  const allLinks = links.map((link, index) => (
    <Nav.Item as="li" key={link}>
      <Nav.Link
        href={`/${link.toLowerCase().split(" ").join("")}`}
        // value={page}
        // onClick={handleClick}
      >
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
      {allLinks}
    </Nav>
  );
}
