import React from "react";

export default function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);

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
  )};