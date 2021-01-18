import React from "react";
import './search.css';

const Search = ({ onSearch, searchTerm }) => {

  return (
    <div className="container form">
      <div className="row">
        <div className="col-sm-12 justify-content-center d-flex">
          <input
            value={searchTerm}
            type="text"
            className="form-control"
            onChange={onSearch}
            placeholder="Search employees"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
