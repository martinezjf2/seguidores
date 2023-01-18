import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Header() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Bienvenidos</Card.Title>
        <Card.Text>Seguidores de Jesus</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
