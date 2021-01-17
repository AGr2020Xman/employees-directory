import React from "react";

export default function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  console.log(headerOrder);
  console.log('dataaaa',data);

 

  
  // console.log('header order', headerOrder);
  return (
    <tbody>
        {data.map((employee) => {
          return (
        <tr className='data-row' key={employee.email}>
        <td>
          <img alt='profile' src={employee.picture}/>
        </td>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob}</td>
  </tr>
    )
  })}
      </tbody>
  //   <tbody>{data.map(({name, phone, email}) => {
  //     return (
  //       <tr>
  //         <td>
  //           {name.first} {name.last}
  //         </td>
  //         <td>
  //           {phone}
  //         </td>
  //         <td>
  //           {email}
  //         </td>
  //       </tr>
  //     )})}
  //     </tbody>
  )}
    
           /* {console.log('name', row)
           <tr className="table-row">
            
           </tr>
           <tr className="table-row">
             {
              row.map((_, i) => <TableCell data={row.find(r => r.key === headerOrder[i])} />)
            }
          </tr> }*/
        //   <tr>
        //   <td>
        //     picture.medium
        //   </td>
        //   <td>
        //     employee.phone
        //   </td>
        //   <td>
        //     employee.email
        //   </td>
        //   <td>
        //     first.name last.name
        //   </td>
        //   <td>
        //     first.name last.name
        //   </td>
        //   <td>
        //     first.name last.name
        //   </td>
        // </tr>
      
      

// import React from 'react';

// export default function TableCell({ data }) {
//   return (
//     <td className="table-cell" onClick={data.sortFunc}>
//       {data.text}
//     </td>
//   );
// };