import { useEffect, useState } from "react";
import API from "../utils/employeeAPI";

// let employees = [];
// let filteredEmployees = [];

// .. the useEffect should [] --- docs for second argument - runs as if did mount/andDidUpdate with all cases.

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sortEmployees, setSortEmployees] = useState("name");

  // useEffect(() => populateData());

  const populateData = () => {
    API.getEmployees()
      .then((res) => {
        setEmployees([res.data.results]);
        setFilteredEmployees(employees);
      })
      .catch((err) => console.log(err));
  };
  //  nest returns - has its own state -

  useEffect(() => {
    const employeeSorting = (emp) => {
      const emps = {
        name: "name",
        email: "email",
        phone: "phone",
        dob: "dob",
      };
      const sortProperties = emps[emp];
      const sorted = [...employees].sort((a, b) => {
        return b[sortProperties] - a[sortProperties];
      });
      setEmployees(sorted);
    };
    employeeSorting(sortEmployees);
  }, [sortEmployees]);
  // const RenderTable = (props) => {

  return (
    <table>
      <caption>Employees</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={(e) => setSortEmployees(e.target.value)}
              // className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={(e) => setSortEmployees(e.target.value)}
              // className={getClassNamesFor("phone")}
            >
              Phone
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={(e) => setSortEmployees(e.target.value)}
              // className={getClassNamesFor("email")}
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
