import React, { useEffect, useState, useMemo } from "react";
import API from "../utils/employeeAPI";

const [search, setSearch] = useState({
  search: "",
});

let employees = [];
let filteredEmployees = [];

const EmployeeTable = () => {
  const init = () => {
    API.getEmployees()
      .then((res) => {
        employees = res.data.results;
        filteredEmployees = res.data.results;
      })
      .catch((err) => console.log(err));
  };

  const handleFilterEmployees = () => {
    // do not filter if there are no employees
    if (employees.length !== 0) {
      const searchTerm = search.search.toLowerCase();
      filteredEmployees = employees[0].filter((emp) => {
        emp.name.first.toLowerCase().include(searchTerm) ||
          emp.name.last.toLowerCase().include(searchTerm) ||
          emp.email.toLowerCase().include(searchTerm);
        renderTable(filteredEmployees);
      });
    }
  };

  //custom hook including all the sorting
  const useSortableData = (employees, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    // perfomant improvement to memoize previous sorts
    const sortedEmployees = useMemo(() => {
      let sortableEmployees = [...employees];
      if (sortConfig !== null) {
        sortableEmployees.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableEmployees;
    }, [employees, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };
    return { employees: sortedEmployees, requestSort, sortConfig };
  };

  const renderTable = (props) => {
    const { employees, requestSort, sortConfig } = useSortableData(
      props.employees
    );
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <table>
        <caption>Employees</caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("phone")}
                className={getClassNamesFor("phone")}
              >
                Phone
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              >
                Email
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id.value}>
              <td>{employee.name}</td>
              <td>${employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
};
