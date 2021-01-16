import React, { useState, useEffect } from "react";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import API from './utils/employeeAPI'

const meta = [
  {
    key: "id",
    text: "ID",
    sort: true,
  },
  {
    key: "name",
    text: "Name",
    sort: true,
  },
  {
    key: "phone",
    text: "Phone",
    sort: true,
  },
  {
    key: "email",
    text: "Email",
    sort: true,
  },
  {
    key: "dob",
    text: "D.O.B",
    sort: true,
  },
];

function normalizeData(employees) {
  return employees.map((td) => {
    const keys = Object.keys(td);
    return keys.map((key) => ({ key, text: td[key] }));
  });
}

const compare = {
  ">": (d1, d2) => d1 > d2,
  "<": (d1, d2) => d1 < d2,
};

function formatDate(birthdate) {
  const date = new Date(birthdate);
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

export const App = () => {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [employees, setEmployees] = useState([]);
  const [sortEmployees, setSortEmployees] = useState({ key: null, order: ">" });
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  

  useEffect(() => {
    const populateData = async () => {
      API.getEmployees()
        .then((res) => {
          setEmployees(res.data.results);
          employees.map((data, id) => {
            return setEmployees({ ...data, id });
          });
          setFilteredEmployees(employees);
        })
        .catch((err) => console.log(err));
    };
    populateData();
  }, []);

  useEffect(() => {
    function sortFunc(m) {
      setSortEmployees({
        key: m.key,
        order: sortEmployees.order === ">" ? "<" : ">",
      });
    }

    setHeaderMeta((currentHeaderMeta) =>
      currentHeaderMeta.map((m) =>
        m.sort ? { ...m, sortFunc: () => sortFunc(m) } : m
      )
    );
  }, [sortEmployees]);

  useEffect(() => {
    // normalize data
    setEmployees(normalizeData(employees), meta);
  }, []);

  useEffect(() => {
    // sort
    setEmployees(
      normalizeData(
        employees.sort((d1, d2) =>
          compare[sortEmployees.order](
            d1[sortEmployees.key],
            d2[sortEmployees.key]
          )
        )
      )
    );
  }, [sortEmployees]);

  return (
    <table className="container">    
        {/* <caption>Employee Directory</caption> */}
      
      <TableHeader headers={headerMeta} />
      {/* <TableData data={employees} meta={meta} /> */}
    </table>
  );
};

export default App;
