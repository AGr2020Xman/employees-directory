import React, { useEffect, useState } from "react";
import API from "../utils/employeeAPI";

const [search, setSearch] = useState({
  search: "",
});

let employees = [];
let filteredEmployees = [];

function EmployeeDirectory() {
  const init = () => {
    API.getEmployees()
      .then((res) => {
        employees = res.data.results;
        filteredEmployees = res.data.results;
      })
      .catch((err) => console.log(err));
  };

  // render array of employees

  const employeeTable = (props) => {
    const { employees } = props;
    const [sortConfig, setSortConfig] = useState(null);
    let sortedEmployees = [...employees];

    if (sortConfig !== null) {
        sortedEmployees.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1:1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1:-1;;
      }
      return 0;
    });
  }
  return (
      <table>
        <caption>Employees</caption>
        <thead>
          <tr>
            <th>
                Image
            </th>
            <th>
                <button type='button' onClick={() => requestSort('name')}>
                    Name
                </button>
            </th>
            <th>
                D.O.B
            </th>
            <th>
                <button type='button' onClick={() => requestSort('phone')}>
                    Phone
                </button>
            </th>
            <th>
                <button type='button' onClick={() => requestSort('email')}>
                    Email
                </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.picture.medium}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const requestSort = () => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction === 'descending'
      }
      setSortConfig({key, direction});
  }

  //   const employeeTable = (props) => {
  //       document.querySelector(".employees").innerHTML = "";

  //       const { employees } = props;
  //       const [sortConfig, setSortConfig] = useState(config);

//   props.forEach((res) => {
//     let date = new Date(`${res.dob.date}`);
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let dt = date.getDate();

//     // show months in "09" format if september for eg.
//     if (dt < 10) {
//       dt = "0" + month;
//     }

//     const formatDate = `${dt}/${month}/${year}`;

    //             let empPageElement = `
    //             <tr>
    //             <td><img src="${res.picture.medium}"></td>
    //             <td>${res.name.first}</td>
    //             <td>${res.name.last}</td>
    //             <td>${res.phone}</td>
    //             <td>${res.email}</td>
    //             <td>${formatDate}</td>
    //             </tr>`;

    //             document.querySelector(".employees").innerHTML += empPageElement;
    //         });
    //     };

    const handleFilterEmployees = () => {
      if (employees.length !== 0) {
        const searchTerm = search.search.toLowerCase();
        filteredEmployees = employees[0].filter((emp) => {
          emp.name.first.toLowerCase().include(searchTerm) ||
            emp.name.last.toLowerCase().include(searchTerm) ||
            emp.email.toLowerCase().include(searchTerm);
          employeeTable(filteredEmployees);
        });
      }
    };

    //     const handleSortEmployees = () => {
    //         let sortableEmployees = [...employees];

    //         if (sortConfig !== null) {
    //             sortableEmployees.sort((a, b) => {
    //                 if (a[sortConfig.key] < b[sortConfig.key]) {
    //                     return sortConfig.direction === 'asc' ? -1:1;
    //                 }
    //                 if (a[sortConfig.key] > b[sortConfig.key]) {
    //                     return sortConfig.direction === 'asc' ? 1:-1
    //                 }
    //                 return 0;
    //             });
    //         }
    //         return sortableEmployees;
    //     }, []
    // } else {
    //     employees.sort((a, b) => {
    //         a.name.first > b.name.first ? -1 : 1;
    //         setSorted(false);
    //     });
    // }

    // let sortedEmployees = [];

    // if (filteredEmployees.length !== 0) {
    //     sortedEmployees = filteredEmployees.sort((a, b) => {
    //         if (indexedName === "first") {
    //         }
    //     });
    // }
    // };
  });

