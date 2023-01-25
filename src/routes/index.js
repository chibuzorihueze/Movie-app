import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, Trending } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      { element: <Home />, index: true },
      { element: <Trending />, path: "trending" },
    ],
  },
]);

export default router;
