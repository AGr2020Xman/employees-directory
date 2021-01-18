import React from "react";
import './tableheader.css';

export default function TableHeader({ headers, handleSortByName, handleSortByDob, handleSortByEmail, handleSortByPhone }) {
  return (
        <tr className="tr-header">
          {headers.map((heading) => {
            switch(heading.text) {
              case 'Name':
                return (
                  <th onClick={handleSortByName} className="sortable-th">
                {heading.text}<i className="fas fa-sort"></i>
              </th>
                );
                
                case 'Email':
                return (
                  <th onClick={handleSortByEmail} className="sortable-th">
                {heading.text}<i className="fa fa-fw fa-sort"></i>
              </th>
                );
                case 'D.O.B':
                return (
                  <th onClick={handleSortByDob} className="sortable-th">
                {heading.text}<i className="fa fa-fw fa-sort"></i>
              </th>
                ); 
                case 'Phone':
                return (
                  <th onClick={handleSortByPhone} className="sortable-th">
                {heading.text}<i className="fa fa-fw fa-sort"></i>
              </th>
                );
                default:
                  return (
                    <th className="sortable-th">
                      {heading.text}
                    </th>
                  )
            }
          })}
        </tr>
  )}