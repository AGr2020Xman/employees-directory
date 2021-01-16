import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";

export const Table = ({ normalizeData,  }) => {

  useEffect(() => {
    // normalize data
    setEmployees(normalizeData(employees), meta);
  }, []);

  return (
    <table className="container">
      <TableHeader headers={headerMeta} />
      <TableData data={tableData} meta={meta} />
    </table>
  );
};
