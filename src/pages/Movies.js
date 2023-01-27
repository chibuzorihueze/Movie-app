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
  const [currGenre, setCurrGenre] = useState("");
  const [allMovies, setAllMovies] = useState([
    {
      id: "tt1740828",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGM4NTRlZjAtNzM1Ni00YTQ5LTk3YWItNWJhNmM3ZTZlYWExXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_Ratio0.6837_AL_.jpg",
      title: "Wonder Woman",
      description: "(2011 TV Movie)",
      runtimeStr: "45 min",
      genres: "Action, Adventure, Fantasy",
      genreList: [
        {
          key: "Action",
          value: "Action",
        },
        {
          key: "Adventure",
          value: "Adventure",
        },
        {
          key: "Fantasy",
          value: "Fantasy",
        },
      ],
      contentRating: null,
      imDbRating: "4.2",
      imDbRatingVotes: "2232",
      metacriticRating: null,
      plot: "It's the modern day, and being Wonder Woman is complicated. Diana is leading a triple life - running a large corporation out of costume and fighting crime in costume in one identity.",
      stars:
        "Jeffrey Reiner, Pedro Pascal, Adrianne Palicki, Cary Elwes, Elizabeth Hurley",
      starList: [
        {
          id: "tt1740828",
          name: "Jeffrey Reiner",
        },
        {
          id: "tt1740828",
          name: "Pedro Pascal",
        },
        {
          id: "tt1740828",
          name: "Adrianne Palicki",
        },
        {
          id: "tt1740828",
          name: "Cary Elwes",
        },
        {
          id: "tt1740828",
          name: "Elizabeth Hurley",
        },
      ],
    },
  ]);

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
          <MovieCard key={id} id={id} image={image} title={title} />
        ))}
      </div>
    </Container>
  );
};

export default Movies;
