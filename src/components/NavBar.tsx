import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="md" className="bg-body-tertiary sticky-nav">
      <Container fluid>
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
