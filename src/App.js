import React, { useState, useEffect } from "react";
import TableHeader from "./components/TableHeader/TableHeader";
import TableData from "./components/TableData/TableData";
import API from './utils/employeeAPI'
import dateFormat from 'dateformat';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import './App.css';

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
    DOB: null,
    Phone: null
  });
  const [searchTerm, setSearchTerm] = useState('');

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
      dob: dateFormat(dob.date, "dd/mm/yyyy")
    })
  })
  
  const handleSortByName = () => {
    // sort array ascending or descending by first name
    // console.log('Sorting by name');
    if (!sorted.Name) {
        formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1);
        setSorted({Name: true, Email: null, DOB: null, Phone: null});
        console.log(sorted);
    } else {
      formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
        setSorted({Name: false, Email: null, DOB: null, Phone: null});
    }
}

const toComparableNumber = (numStr) => {
  const [part1, part2, part3] = numStr.split("-");
  const newNumber = part1;
  // console.log(newNumber);
  return parseInt(newNumber);
}

const handleSortByPhone = () => {
  // sort array ascending or descending by phone
  if (!sorted.Phone) {
      formatEmployeeData.sort((a, b) => (toComparableNumber(a.phone) > toComparableNumber(b.phone)) ? 1 : -1);
      setSorted({Phone: true, Email: null, DOB: null, Name: null});
      console.log(sorted);
  } else {
    formatEmployeeData.sort((a, b) => (toComparableNumber(a.phone) > toComparableNumber(b.phone)) ? -1 : 1);
      setSorted({Phone: false, Email: null, DOB: null, Name: null});
  }
}

const toComparableDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/")
  return new Date(year, month - 1, day)
}

const handleSortByDob = ()  => {
    // sort array ascending or descending by dob
    if (!sorted.DOB) {
      formatEmployeeData.sort((a, b) => (toComparableDate(a.dob) > toComparableDate(b.dob)) ? 1 : -1);
        setSorted({DOB: true, Name: null, Email: null, Phone: null});
      console.log(sorted);
    } else {
      formatEmployeeData.sort((a, b) => (toComparableDate(a.dob) > toComparableDate(b.dob)) ? -1 : 1);
        setSorted({DOB: false, Name: null, Email: null, Phone: null});
    }
}

const handleSortByEmail = () => {
  // sort array ascending or descending by email
  if (!sorted.Email) {
      formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1);
      setSorted({Email: true, Name: null, DOB: null, Phone: null});
      console.log(sorted);
  } else {
      formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1);
      setSorted({Email: false, Name: null, DOB: null, Phone: null});
  }
}

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const sortedEmployees = function() {
  if (!sorted.Name && sorted.Email === null  && sorted.DOB === null && sorted.Phone === null) {
    return formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1) 
  } else if (sorted.Name && sorted.Email === null && sorted.DOB === null && sorted.Phone === null) { 
    return formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
  } else if (!sorted.Email && sorted.Name === null && sorted.DOB === null && sorted.Phone === null) {
    return formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1)
  } else if (sorted.Email && sorted.Name === null && sorted.DOB === null && sorted.Phone === null) {
    return formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1)
  } else if (!sorted.DOB && sorted.Name === null && sorted.Email === null && sorted.Phone === null) {
    return formatEmployeeData.sort((a, b) => (toComparableDate(a.dob) > toComparableDate(b.dob)) ? 1 : -1)
  } else if (sorted.DOB && sorted.Name === null && sorted.Email === null && sorted.Phone === null) {
    return formatEmployeeData.sort((a, b) => (toComparableDate(a.dob) > toComparableDate(b.dob)) ? -1 : 1)
  } else if (!sorted.Phone && sorted.Email === null && sorted.Name === null && sorted.DOB === null) {
    return formatEmployeeData.sort((a, b) => toComparableNumber(a.phone) > toComparableNumber(b.phone) ? 1 : -1)
  } else if (sorted.Phone && sorted.Email === null && sorted.Name === null && sorted.DOB === null) {
    return formatEmployeeData.sort((a, b) => toComparableNumber(a.phone) > toComparableNumber(b.phone) ? -1 : 1)
  }
  };

  // singular test cases
// const sortedEmployees = sorted.Phone ? formatEmployeeData.sort((a, b) => toComparableNumber(a.phone) > toComparableNumber(b.phone) ? 1:-1) : formatEmployeeData.sort((a, b) => toComparableNumber(a.phone) > toComparableNumber(b.phone) ? -1:1)
  // const sortedEmployees = sorted.Name ? formatEmployeeData.sort((a, b) => (a.name > b.name) ? 1 : -1) : formatEmployeeData.sort((a, b) => (a.name > b.name) ? -1 : 1);
  // const sortedEmployees = sorted.Email ? formatEmployeeData.sort((a, b) => (a.email > b.email) ? 1 : -1) : formatEmployeeData.sort((a, b) => (a.email > b.email) ? -1 : 1);

  const filteredEmployees = sortedEmployees().filter((employee) => {
    return(
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  });



  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearchTerm} searchTerm={searchTerm}/>
    <table className="table-container table table-striped">    
      <TableHeader 
        headers={headerMeta} 
        handleSortByName={handleSortByName} 
        handleSortByEmail={handleSortByEmail} 
        handleSortByDob={handleSortByDob} 
        handleSortByPhone={handleSortByPhone}
      />
      <TableData data={filteredEmployees} meta={meta} />
    </table>
    </div>
  );
};

export default App;
