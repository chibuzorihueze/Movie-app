import React, { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieCard from "../components/common/Card";
import { fetchTVSeriesOrMovieWithGenreApi } from "../services/apis";

const genres = [
  { id: 0, name: "Action" },
  { id: 1, name: "Adventure" },
  { id: 2, name: "Animation" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Crime" },
  { id: 5, name: "Documentary" },
  { id: 6, name: "Drama" },
  { id: 7, name: "Family" },
  { id: 8, name: "Fantasy" },
  { id: 9, name: "History" },
  { id: 10, name: "Horror" },
  { id: 11, name: "Music" },
  { id: 12, name: "Mystery" },
  { id: 13, name: "Romance" },
  { id: 14, name: "Science Fiction" },
  { id: 15, name: "TV Movie" },
  { id: 16, name: "Thriller" },
  { id: 17, name: "War" },
  { id: 18, name: "Western" },
];

const Movies = () => {
  const [currGenre, setCurrGenre] = useState("Action");

  const getMoviesByGenre = useCallback(async () => {
    try {
      const res = await fetchTVSeriesOrMovieWithGenreApi("tv_movie", currGenre);
      console.log(res);
    } catch (err) {
      throw err;
    }
  }, [currGenre]);

  useEffect(() => {
    getMoviesByGenre();
  }, [getMoviesByGenre]);

  return (
    <Container className="mx-auto w-75 my-4">
      <div
        className="genres d-flex flex-wrap"
        style={{ gap: "15px 15px", opacity: 1, transform: "none" }}
      >
        {genres.map(({ id, name }) => (
          <Button
            variant={currGenre === name ? "primary" : "secondary"}
            size="md"
            key={id}
            onClick={() => setCurrGenre(name)}
          >
            {name}
          </Button>
        ))}
      </div>
      <div className="my-5">
        <MovieCard />
      </div>
    </Container>
  );
};

export default Movies;
