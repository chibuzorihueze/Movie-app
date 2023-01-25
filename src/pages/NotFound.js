import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
      <h1 className="h1">404</h1>
      <p>Page Not Found</p>
      <Link to="/">
        <div className="btn btn-outline-light">Go back HOME</div>
      </Link>
    </div>
  );
};

export default NotFound;
