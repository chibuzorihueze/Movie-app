import React from "react";
import { Form } from "react-bootstrap";

const Search = () => (
  <div className="container mx-auto text-white py-5 ">
    <div className="w-50 d-flex justify-content-between">
      <Form.Control
        size="md"
        type="text"
        placeholder="Search Movies"
        className="me-5 bg-transparent text-white"
      />
      <button className="btn btn-success">Search</button>
    </div>
  </div>
);

export default Search;
