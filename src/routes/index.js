import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout";
import { Home, MovieDetail, NotFound, Trending } from "../pages";

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
          { element: <MovieDetail />, path: ":id" },
        ],
      },
    ],
  },
]);

export default router;
