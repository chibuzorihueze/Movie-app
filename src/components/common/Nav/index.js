import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopNav = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">MoviesHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNav;
