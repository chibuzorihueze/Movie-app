import React from "react";
import { Button, Container } from "react-bootstrap";

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
  return (
    <Container className="mx-auto border w-75">
      <div
        className="genres d-flex flex-wrap"
        style={{ gap: "15px 15px", opacity: 1, transform: "none" }}
      >
        {genres.map(({ id, name }) => (
          <Button variant="primary" size="md" key={id}>
            {name}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Movies;
