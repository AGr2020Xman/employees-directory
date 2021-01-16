import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";

export const Table = ({ normalizeData }) => {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // normalize data
    setTableData(normalizeData(data), meta);
  }, []);

  return (
    <table className="container">
      <TableHeader headers={headerMeta} />
      <TableData data={tableData} meta={meta} />
    </table>
  );
};
