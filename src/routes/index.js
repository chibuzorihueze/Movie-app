import { createBrowserRouter } from "react-router-dom";
import { Home, Trending } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { element: <Home />, index: true },
      { element: <Trending />, path: "trending" },
    ],
  },
]);

export default router;
