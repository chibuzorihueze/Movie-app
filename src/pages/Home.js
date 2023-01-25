import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoviesCard } from "../components/common";
import { FetchAllMovies } from "../services/apis";

const Home = () => {
  const [allMovies, setAllMovies] = useState([
    {
      id: "tt0111161",
      rank: "1",
      title: "The Shawshank Redemption",
      fullTitle: "The Shawshank Redemption (1994)",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
      crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
      imDbRating: "9.2",
      imDbRatingCount: "2690579",
    },
    {
      id: "tt0068646",
      rank: "2",
      title: "The Godfather",
      fullTitle: "The Godfather (1972)",
      year: "1972",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
      crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
      imDbRating: "9.2",
      imDbRatingCount: "1866371",
    },
    {
      id: "tt0468569",
      rank: "3",
      title: "The Dark Knight",
      fullTitle: "The Dark Knight (2008)",
      year: "2008",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
      crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
      imDbRating: "9.0",
      imDbRatingCount: "2664237",
    },
    {
      id: "tt0071562",
      rank: "4",
      title: "The Godfather: Part II",
      fullTitle: "The Godfather: Part II (1974)",
      year: "1974",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
      crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
      imDbRating: "9.0",
      imDbRatingCount: "1276555",
    },
    {
      id: "tt0050083",
      rank: "5",
      title: "12 Angry Men",
      fullTitle: "12 Angry Men (1957)",
      year: "1957",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg",
      crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
      imDbRating: "9.0",
      imDbRatingCount: "794876",
    },
    {
      id: "tt0108052",
      rank: "6",
      title: "Schindler's List",
      fullTitle: "Schindler's List (1993)",
      year: "1993",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
      crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
      imDbRating: "8.9",
      imDbRatingCount: "1360761",
    },
    {
      id: "tt0167260",
      rank: "7",
      title: "The Lord of the Rings: The Return of the King",
      fullTitle: "The Lord of the Rings: The Return of the King (2003)",
      year: "2003",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
      crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
      imDbRating: "8.9",
      imDbRatingCount: "1853660",
    },
    {
      id: "tt0110912",
      rank: "8",
      title: "Pulp Fiction",
      fullTitle: "Pulp Fiction (1994)",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
      crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
      imDbRating: "8.8",
      imDbRatingCount: "2064837",
    },
    {
      id: "tt0120737",
      rank: "9",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
      year: "2001",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg",
      crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
      imDbRating: "8.8",
      imDbRatingCount: "1883232",
    },
    {
      id: "tt0060196",
      rank: "10",
      title: "The Good, the Bad and the Ugly",
      fullTitle: "The Good, the Bad and the Ugly (1966)",
      year: "1966",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
      crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
      imDbRating: "8.8",
      imDbRatingCount: "765342",
    },
    {
      id: "tt0109830",
      rank: "11",
      title: "Forrest Gump",
      fullTitle: "Forrest Gump (1994)",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
      crew: "Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
      imDbRating: "8.8",
      imDbRatingCount: "2089092",
    },
  ]);
  const getAllMovies = async () => {
    try {
      const res = await FetchAllMovies();
      console.log(res);
      setAllMovies(allMovies);
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
