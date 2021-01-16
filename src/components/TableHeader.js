import React from "react";
import TableCell from "./TableCell";

export default function TableHeader({ headers }) {
  // console.log(headers);
  // console.log('new array',headers.map((d)=>{
  //   return (
  //     d.text
  //   )
  // }));
  return (
//     <th className="table-row">
//       {headers.map((d) => {
//         return (
//           <td>
//             {d}
//           </td>
//         )
//       })}
//     </th>
//   );
// };
// {headers.map((d) => (
  // <TableCell data={d} />
// ))}
<th>
        <tr>
          {headers.map((heading) => {
            return (
              <td>
                {heading.text}
              </td>
            )
          })}
        {/* <td>
            Image here
          </td>
          <td>
            Name here
          </td>
          <td>
            Phone here
          </td>
          <td>
            Email here
          </td>
          <td>
            DOB here
          </td> */}
        </tr>
  </th>
  )}
       