import React from "react";
import TableCell from "./TableCell";

export default function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  // console.log('header order', headerOrder);
  return (
    <tbody>
      {
        data.map((row) => (
          // console.log('row', row)
          <tr className="table-row">
            {
              row.map((_, i) => <TableCell data={row.find(r => r.key === headerOrder[i])} />)
            }
          </tr>
        ))
      }
    </tbody>
  )
}
