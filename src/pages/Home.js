import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FetchAllMovies } from "../services/apis";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const getAllMovies = async () => {
    try {
      const res = await FetchAllMovies();
      console.log(res);
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
        <Row lg={4} className="main">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Col>
              <Card className="movie_card">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
