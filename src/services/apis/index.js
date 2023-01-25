import axios from "../axios";

export const FetchAllMovies = async () => {
  try {
    const url = `Top250Movies/${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
