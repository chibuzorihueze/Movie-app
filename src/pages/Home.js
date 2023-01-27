import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { MoviesCard } from "../components/common";
import { fetchAllMoviesApi } from "../services/apis";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const res = await fetchAllMoviesApi();
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
