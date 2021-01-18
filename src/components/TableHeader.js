import React from "react";

export default function TableHeader({ headers, handleSortByName, handleSortByEmail }) {
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
                default:
                  return (
                    <th>
                      {heading.text}
                    </th>
                  )
            }
          })}
        </tr>
  )}