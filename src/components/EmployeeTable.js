import { useEffect, useState } from "react";
import API from "../utils/employeeAPI";

// let employees = [];
// let filteredEmployees = [];

// .. the useEffect should [] --- docs for second argument - runs as if did mount/andDidUpdate with all cases.

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sortEmployees, setSortEmployees] = useState("name");

  const populateData = () => {
    API.getEmployees()
      .then((res) => {
        setEmployees(res.data.results);
        setFilteredEmployees(employees);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => populateData(), []);

  //  nest returns - has its own state -

  // useEffect(() => {
  //   const employeeSorting = (emp) => {
  //     const emps = {
  //       name: "name.last",
  //       email: "email",
  //       phone: "phone",
  //       dob: "dob",
  //     };
  //     const sortProperties = emps[emp];
  //     const sorted = [...employees].sort((a, b) => {
  //       return b[sortProperties] - a[sortProperties];
  //     });
  //     setEmployees(sorted);
  //   };
  //   employeeSorting(sortEmployees);
  // }, [sortEmployees]);

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
        {employees.length > 0 &&
          employees.map((employee) => (
            <tr>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
  // };
};

<tbody className="tbody-dark">
      {employees.length > 0 &&
        employees.map((employee) => (
          <tr>
            <td className="datafield">
              <img alt="profile" src={employee.picture.medium} />
            </td>
            <td className="datafield">
              {employee.name.first} {employee.name.last}
            </td>
            <td className="datafield wide">{employee.email}</td>
            <td className="datafield">{employee.phone}</td>
            <td className="datafield">{formatDate(employee.dob.date)}</td>
          </tr>
        ))}
    </tbody>
  );