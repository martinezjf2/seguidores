import React from "react";
import Card from "react-bootstrap/Card";

export default function Header() {
  return (
    <Card id="header">
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
