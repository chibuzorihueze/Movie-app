import React, { useEffect } from "react";
import { FetchAllMovies } from "../services/apis";

const Home = () => {
  const getAllMovies = async () => {
    try {
      const res = await FetchAllMovies();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return <>Home</>;
};

export default Home;
