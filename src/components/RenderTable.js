import React from "react";

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
