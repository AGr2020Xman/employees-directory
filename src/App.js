import React, { useState, useEffect } from "react";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import API from './utils/employeeAPI'
import dateFormat from 'dateformat';
import Search from './components/Search';
import Header from './components/Header';

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

export const App = () => {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [employees, setEmployees] = useState([]);
  const [sorted, setSorted] = useState({
    Name: false,
    Email: null,
    // DOB: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  // const [filteredEmployees, setFilteredEmployees] = useState(employees);

  

  useEffect(() => {
    const populateData = async () => {
      API.getEmployees()
        .then((res) => {
          setEmployees(res.data.results);
          employees.map((data, id) => {
            return setEmployees({ ...data, id });
          });
          // setFilteredEmployees(employees);
        })
        .catch((err) => console.log(err));
    };
    populateData();
  }, []);

  let formatEmployeeData = employees.map((person) => {
    let { name, email, dob, phone, picture } = person
    return ({
      picture: picture.medium,
      name: name.first + ' ' + name.last,
      email: email,
      phone: phone,
      // dob: dateFormat(dob, "dd/mm/yyyy")
      dob: dateFormat(dob.date, "dd/mm/yyyy")
    })
  })
  
  const handleSortByName = () => {
    // sort array ascending or descending by first name
    // console.log('Sorting by name');
    if (!sorted.Name) {
        formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1);
        setSorted({...sorted, Name: true, Email: null});
        console.log(sorted);
    } else {
      formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
        setSorted({...sorted, Name: false, Email: null});
    }
}

// requires further 
// const handleSortByDob = ()  =>{
//     // sort array ascending or descending by dob
//     if (!sorted) {
//       formatEmployeeData.sort((a, b) => (a.dob.getTime() > b.dob.getTime()) ? 1 : -1);
//         setSorted({sorted, DOB: true});
//     } else {
//       formatEmployeeData.sort((a, b) => (a.dob.getTime() > b.dob.getTime()) ? -1 : 1);
//         setSorted({sorted, DOB: false});
//     }
// }

const handleSortByEmail = () => {
  // sort array ascending or descending by email
  if (!sorted.Email) {
      formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1);
      setSorted({Email: true, Name: null});
  } else {
      formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1);
      setSorted({Email: false, Name: null});
  }
}

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const sortedEmployees = function() {
  if (!sorted.Name && sorted.Email === null) {
    return formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1) 
  } else if (sorted.Name && sorted.Email === null) { 
    return formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
  } else if (!sorted.Email && sorted.Name === null) {
    return formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1)
  } else if (sorted.Email && sorted.Name === null) {
    return formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1)
  };
  }

  // const sortedEmployees = sorted.Name ? formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1) : formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
  // const sortedEmployees = sorted.Email ? formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1) : formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1);
  const filteredEmployees = sortedEmployees().filter(employee => {
    console.log(sorted);
    return (
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  });



  return (
    <div className="container">
    {/* <caption>Employee Directory</caption> */}
      <Header />
      <Search onSearch={handleSearchTerm} searchTerm={searchTerm}/>
    <table className="container">    
      <TableHeader headers={headerMeta} handleSortByName={handleSortByName} handleSortByEmail={handleSortByEmail}/>
      <TableData data={filteredEmployees} meta={meta} />
    </table>
    </div>
  );
};

export default App;
