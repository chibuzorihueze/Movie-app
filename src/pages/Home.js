import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { MoviesCard } from "../components/common";
import { fetchAllMoviesApi } from "../services/apis";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [hasError, setHasError] = useState({
    currState: false,
    message: "",
  });

  const getAllMovies = async () => {
    try {
      const res = await fetchAllMoviesApi();

      if (!res.items.length > 0) {
        setHasError({
          currState: true,
          message: res.errorMessage,
        });
      } else {
        setAllMovies(res.items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Container>
      <Row className="my-4">
        {hasError.currState && <Alert variant="danger">Invalid API KEY</Alert>}
      </Row>
      <main>
        <Row md={12} lg={4} className="main">
          {allMovies.map(({ id, image, title }) => (
            <MoviesCard id={id} image={image} title={title} />
          ))}
        </Row>
      </main>
    </Container>
  );
};

export default Home;
