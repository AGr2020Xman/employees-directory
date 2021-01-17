import React from "react";
import TableCell from "./TableCell";

export default function TableHeader({ headers, handleSortByName, handleSortByDob, handleSortByEmail }) {
  return (
        <tr>
          {headers.map((heading) => {
            switch(heading.text) {
              case 'Name':
                return (
                  <th onClick={handleSortByName}>
                {heading.text}
              </th>
                );
                
                case 'Email':
                return (
                  <th onClick={handleSortByEmail}>
                {heading.text}
              </th>
                );
                case 'D.O.B':
                return (
                  <th onClick={handleSortByDob}>
                {heading.text}
              </th>
                );
                default:
                  console.log('cheese',heading.text);
                  return (
                    <th>
                      {heading.text}
                    </th>
                  )
            }
          })}
        </tr>
  )}