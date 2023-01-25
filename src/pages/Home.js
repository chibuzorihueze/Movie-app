import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FetchAllMovies } from "../services/apis";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const getAllMovies = async () => {
    try {
      const res = await FetchAllMovies();
      console.log(res);
      setAllMovies(res.items);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Container>
      <main>
        <Row md={12} lg={3} className="main">
          {allMovies.map(({ image, title }) => (
            <Col>
              <Card className="movie_card">
                <Card.Img variant="top" src={image} width={227} height={350} />
                <Card.Body>
                  <Link to="!#" className="movie_title text-uppercase">
                    {title}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    </Container>
  );
};

export default Home;
