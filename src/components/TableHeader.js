import React from "react";
import TableCell from "./TableCell";

export const TableHeader = ({ headers }) => {
  return (
    <th className="table-row">
      {headers.map((d) => (
        <TableCell data={d} />
      ))}
    </th>
  );
};
