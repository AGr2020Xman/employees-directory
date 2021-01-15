import React, { useState } from "react";
import SearchForm from "./SearchForm";

export const SearchBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchForm />
      </div>
    </nav>
  );
};
