import React, { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MovieCard from "../components/common/Card";
import { fetchTVSeriesOrMovieWithGenreApi } from "../services/apis";

const genres = [
  { id: 0, name: "Action & Adventure" },
  { id: 1, name: "Adventure" },
  { id: 2, name: "Animation" },
  { id: 3, name: "Biograpghy" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Crime" },
  { id: 6, name: "Documentary" },
  { id: 7, name: "Drama" },
  { id: 8, name: "Family" },
  { id: 9, name: "Fantasy" },
  { id: 10, name: "History" },
  { id: 11, name: "Horror" },
  { id: 12, name: "Music" },
  { id: 13, name: "Mystery" },
  { id: 14, name: "Romance" },
  { id: 15, name: "Science Fiction" },
  { id: 16, name: "TV Movie" },
  { id: 17, name: "Thriller" },
  { id: 18, name: "War" },
  { id: 19, name: "Western" },
];

const TVSeries = () => {
  const [currGenre, setCurrGenre] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  const getMoviesByGenre = useCallback(async () => {
    try {
      const res = await fetchTVSeriesOrMovieWithGenreApi(
        "tv_series",
        currGenre
      );
      setAllMovies(res.results);
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
        style={{ gap: "15px", opacity: 1, transform: "none" }}
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
        {allMovies.map(({ id, image, title }) => (
          <MovieCard
            key={id}
            id={id}
            image={image}
            title={title}
            category="tv"
          />
        ))}
      </div>
    </Container>
  );
};

export default TVSeries;
