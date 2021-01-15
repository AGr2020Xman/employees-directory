import { useEffect, useState } from "react";
import API from "../utils/employeeAPI";
import { useSortableData } from "../utils/sortDataCustomHook";

// let employees = [];
// let filteredEmployees = [];

// .. the useEffect should [] --- docs for second argument - runs as if did mount/andDidUpdate with all cases.

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => populateData(), []);
  const populateData = () => {
    API.getEmployees()
      .then((res) => {
        setEmployees([res.data.results]);
        setFilteredEmployees(employees);
      })
      .catch((err) => console.log(err));
  };
  //  nest returns - has its own state -
  const sortEmployees = (emp) => {
    const emps = {
      name: "name",
      email: "email",
      phone: "phone",
      dob: "dob",
    };
    const sortProperties = emps[emp];
    const sorted = employees.sort((a, b) => {
      return b[sortProperties] - a[sortProperties];
    });
    setEmployees(sorted);
  };

  // const RenderTable = (props) => {

  return (
    <table>
      <caption>Employees</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => sortEmployees("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => sortEmployees("phone")}
              className={getClassNamesFor("phone")}
            >
              Phone
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => sortEmployees("email")}
              className={getClassNamesFor("email")}
            >
              Email
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  // };
};
