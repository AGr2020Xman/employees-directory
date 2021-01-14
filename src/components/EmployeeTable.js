import { useEffect, useState } from "react";
import API from "../utils/employeeAPI";
import { useSortableData } from "../utils/sortDataCustomHook";

let employees = [];
let filteredEmployees = [];

// .. the useEffect should [] --- docs for second argument - runs as if did mount/andDidUpdate with all cases.

export const EmployeeTable = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const init = () => {
    API.getEmployees()
      .then((res) => {
        employees = res.data.results;
        filteredEmployees = res.data.results;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (employees.length === 0) {
      init();
    } else {
      handleFilterEmployees();
    }
  });

  const handleFilterEmployees = () => {
    // do not filter if there are no employees
    if (employees.length !== 0) {
      const searchTerm = search.search.toLowerCase();
      filteredEmployees = employees[0].filter((emp) => {
        emp.name.first.toLowerCase().include(searchTerm) ||
          emp.name.last.toLowerCase().include(searchTerm) ||
          emp.email.toLowerCase().include(searchTerm);
        RenderTable(filteredEmployees);
      });
    }
  };

  const RenderTable = (props) => {
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
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
};
