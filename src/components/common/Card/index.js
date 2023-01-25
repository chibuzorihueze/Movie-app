import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, title }) => (
  <Col>
    <Card className="movie_card">
      <Card.Img variant="top" src={image} width={227} height={350} />
      <Card.Body>
        <Link to={`/${id}`} className="movie_title text-uppercase">
          {title}
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

export default MovieCard;
