import React from "react";
import Card from "react-bootstrap/Card";
import groupImage from "../images/group.png";
import elmer from "../images/elmer.png";
import fermina from "../images/fermina.png";
import john from "../images/john.png";
import jeffrey from "../images/jeffrey.png";
import joseph from "../images/joseph.png";

export default function Header() {
  return (
    <header className="App-header">
      <Card id="header">
        <img src={groupImage} id="first-image" alt="group" />
        <img src={elmer} id="second-image" alt="elmer" />
        <img src={fermina} id="third-image" alt="fermina" />
        <img src={john} id="fourth-image" alt="john" />
        <img src={jeffrey} id="fifth-image" alt="jeffrey" />
        <img src={joseph} id="sixth-image" alt="joseph" />

        <Card.Body id="card-body" style={{ animation: "fadein 10s" }}>
          <Card.Title id="header-welcome" className="text-center">
            Bienvenidos
          </Card.Title>
          <Card.Text id="header-group" className="text-center" expand="lg">
            Seguidores de Jesus
          </Card.Text>
        </Card.Body>
      </Card>
    </header>
  );
}
