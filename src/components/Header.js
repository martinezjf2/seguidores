import React from "react";
import Card from "react-bootstrap/Card";
import groupImage from '../group.png';
import joseph from '../joseph.png';


export default function Header() {
  return (
    <Card id="header">
      <img src={groupImage} id="first-image"/>
      <img src={groupImage} id="second-image"/>

      <Card.Body id="card-body">
        <Card.Title id="header-welcome" className="text-center">
          Bienvenidos
        </Card.Title>
        <Card.Text id="header-group" className="text-center">
          Seguidores de Jesus
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
