import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchMovieByIdApi } from "../services/apis";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetail = useCallback(async () => {
    try {
      const res = await fetchMovieByIdApi(id);
      console.log(res);
      setMovieDetail(res);
    } catch (err) {
      throw err;
    }
  }, [id]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);

  return (
    <div className="text-white">
      <Container className="py-5 mx-auto">
        <Row>
          <Col className="border" lg={4}>
            <div>
              <img
                src={movieDetail.image}
                alt="movie_cover"
                width={350}
                height={500}
              />
            </div>
          </Col>
          <Col lg={6}>
            <h1>{movieDetail.title}</h1>
            <p>{movieDetail.plot}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
