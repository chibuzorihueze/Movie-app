import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, title }) => (
  <Col>
    <Card className="movie_card bg-dark mb-5">
      <Card.Img variant="top" src={image} width={227} height={320} />
      <Card.Body className="text-center">
        <Link to={`/movie/${id}`} className="movie_title text-uppercase">
          {title}
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

export default MovieCard;
