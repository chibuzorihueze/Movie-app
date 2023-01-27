import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TbMovie } from "react-icons/tb";
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
          <Col className="">
            <div className="movie_detail-img">
              <img src={movieDetail.image} alt="movie_cover" />
            </div>
          </Col>
          <Col className="">
            <h1>{movieDetail.title}</h1>
            <p className="">{movieDetail.plot}</p>
            <p>Release Date: {movieDetail.releaseDate}</p>
            <div className="btn btn-success w-50 text-dark fw-bold my-5">
              <TbMovie />
              Play Trailer
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <h3>Cast</h3>
          <div className="cast my-5">
            {movieDetail?.actorList?.map(({ asCharacter, id, image, name }) => (
              <div key={id}>
                <div className="img_container d-flex justify-content-center items-center">
                  <img
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-circle"
                  />
                </div>
                <div className="text-center my-2">
                  <p>{name}</p>
                  <span>{asCharacter}(voice)</span>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
