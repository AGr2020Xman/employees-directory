import React from "react";

const Search = ({ onSearch, searchTerm }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 justify-content-center d-flex">
          <input
            value={searchTerm}
            type="text"
            className="form-control"
            onChange={onSearch}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
