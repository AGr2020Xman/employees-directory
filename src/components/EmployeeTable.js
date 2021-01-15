import { useEffect, useState } from "react";
import API from "../utils/employeeAPI";
import { useSortableData } from "../utils/sortDataCustomHook";

// let employees = [];
// let filteredEmployees = [];

// .. the useEffect should [] --- docs for second argument - runs as if did mount/andDidUpdate with all cases.

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => populateData);

  const populateData = () => {
    API.getEmployees()
      .then((res) => {
        setEmployees(res.data.results);
        setFilteredEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  //  nest returns - has its own state -
  //

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
