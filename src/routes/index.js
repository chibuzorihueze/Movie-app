import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout";
import {
  Home,
  MovieDetail,
  Movies,
  NotFound,
  Search,
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
          { element: <Movies />, path: "movies" },
          { element: <TVSeries />, path: "tv-series" },
          { element: <MovieDetail />, path: ":id" },
          { element: <MovieDetail />, path: "/movie/:id" },
          { element: <MovieDetail />, path: "/tv/:id" },
          { element: <Search />, path: "search" },
        ],
      },
    ],
  },
]);

export default router;
