import axios from "../axios";

/**
 * Fetch all movies
 * @param {}
 * @return {{items:[], erroMessage: ''}} An object containing items and errormessage
 */
export const FetchAllMoviesApi = async () => {
  try {
    const url = `Top250Movies/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const PopularMoviesApi = async () => {
  try {
    const url = `MostPopularMovies/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
