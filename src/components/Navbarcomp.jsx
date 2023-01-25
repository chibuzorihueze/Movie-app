import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Trendings } from "./Trendings";
import { Movies } from "./Movies";
import { TVseries } from "./TVseries";
import { Home } from "./Home";

export const Navbarcomp = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MoviesHub</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/trendings">Trendings</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/tvseries">TV Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/trendings" component={Trendings} />
      <Route path="/movies" component={Movies} />
      <Route path="/tvseries" component={TVseries} />
    </Router>
  );
};
