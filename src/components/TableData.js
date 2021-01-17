import React from "react";
import dateFormat from 'dateformat';

export default function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  console.log(headerOrder);
  console.log('dataaaa',data);

  let extractedData = data.map((person) => {
    let { name, email, dob, phone, picture } = person
    return ({
      picture: picture.medium,
      name: name.first + ' ' + name.last,
      email: email,
      phone: phone,
      // dob: dateFormat(dob, "dd/mm/yyyy")
      dob: dateFormat(dob.date, "dd/mm/yyyy")
    })
  })
  console.log(extractedData);

  
  // console.log('header order', headerOrder);
  return (
    <tbody>
        {extractedData.map((employee) => {
          return (
        <tr className='data-row' key={employee.email}>
        <td>
          <img alt='picture profile' src={employee.picture}/>
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