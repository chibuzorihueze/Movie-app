import axios from "axios";

const instance = axios.create({
  baseURL: "https://imdb-api.com/en/API/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const successHandler = (response) => response;

const errorHandler = (error) => Promise.reject(error);

instance.interceptors.response.use(successHandler, errorHandler);

export default instance;
