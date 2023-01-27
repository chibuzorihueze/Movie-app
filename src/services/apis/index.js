import axios from "../axios";

/**
 * Fetch all movies
 * @param {}
 * @return {{items:[], erroMessage: ''}} An object containing items and errormessage
 */
export const fetchAllMoviesApi = async () => {
  try {
    const url = `Top250Movies/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieByIdApi = async (id) => {
  try {
    const url = `Title/${process.env.REACT_APP_API_KEY}/${id}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch Popular Movies
 * @param {}
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
export const fetchPopularMoviesApi = async () => {
  try {
    const url = `MostPopularMovies/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch TVSeries
 * @param {}
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
export const fetchTVSeriesApi = async () => {
  try {
    const url = `Top250TVs/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch TVSeries or Movies with Genre
 * @param {string, string}
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
export const fetchTVSeriesOrMovieWithGenreApi = async (titleType, action) => {
  console.log(titleType, action);
  try {
    const url = `AdvancedSearch/${process.env.REACT_APP_API_KEY}?title_type=${titleType}&genres=${action}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
