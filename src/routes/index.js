import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout";
import {
  Home,
  MovieDetail,
  Movies,
  NotFound,
  Search,
  Trending,
  TVSeries,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        element: <WebLayout />,
        children: [
          { element: <Home />, index: true },
          { element: <Trending />, path: "trending" },
          { element: <Movies />, path: "movies" },
          { element: <TVSeries />, path: "tv-series" },
          { element: <MovieDetail />, path: "/movie/:id" },
          { element: <Search />, path: "search" },
        ],
      },
    ],
  },
]);

export default router;
