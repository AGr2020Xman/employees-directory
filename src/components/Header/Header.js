import React from "react";
import './header.css';

export default function Header() {
  return (
    <header className="header text-center">
      <h2>Employee Directory</h2>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results
      </p>
    </header>
  );
};