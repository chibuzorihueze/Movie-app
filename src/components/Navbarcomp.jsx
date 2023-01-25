import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'

export const Navbarcomp = () => {
  return (
    <div>
      <Navbar className="nav" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MoviesHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Trendings</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">TV Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
