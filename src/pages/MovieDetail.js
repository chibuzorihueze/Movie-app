import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieByIdApi } from "../services/apis";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetail = useCallback(async () => {
    try {
      const res = await fetchMovieByIdApi(id);
      console.log(res);
    } catch (err) {
      throw err;
    }
  }, [id]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);

  return <div>MovieDetail</div>;
};

export default MovieDetail;
