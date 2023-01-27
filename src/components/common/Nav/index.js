import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HiFire } from "react-icons/hi";
import { TbMovie, TbSearch } from "react-icons/tb";
import { IoMdTv } from "react-icons/io";

const TopNav = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">MoviesHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <HiFire size={24} />
            Trending
          </Nav.Link>
          <Nav.Link
            href="movies"
            className="d-flex justify-content-center align-items-center"
          >
            <TbMovie size={24} />
            Movies
          </Nav.Link>
          <Nav.Link
            href="tv-series"
            className="d-flex justify-content-center align-items-center"
          >
            <IoMdTv size={24} />
            TV Series
          </Nav.Link>
          <Nav.Link
            href="search"
            className="d-flex justify-content-center align-items-center"
          >
            <TbSearch size={24} />
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNav;
