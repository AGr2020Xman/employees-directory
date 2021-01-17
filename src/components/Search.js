import React, { useState } from "react";

const Search = ({ onSearch, searchTerm }) => {

  // const filterEmployees = (e) => {
  //   // do not filter if there are no employees
  //   if (employees.length !== 0) {
  //     setSearchTerm(e.target.value.toLowerCase());
  //     setFilteredEmployees(
  //       employees[0].filter((emp) => {
  //         emp.name.first.toLowerCase().include(searchTerm) ||
  //           emp.name.last.toLowerCase().include(searchTerm) ||
  //           emp.email.toLowerCase().include(searchTerm);
  //         return filteredEmployees;
  //       })
  //     );
  //   }
  // };

  //   useEffect(() => {
  //     if (employees.length === 0) {
  //     } else {
  //       filterEmployees();
  //     }
  //   });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 justify-content-center d-flex">
          <input
            value={searchTerm}
            type="text"
            className="form-control"
            onChange={onSearch}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};
// const [search, setSearch] = useState("");
//   const [employees, setEmployees] = useState();
//   const [filterEmployees, setFilterEmployees] = useState();

//   const
// return (
// <div className="container-sm searchBar">
//             <div className="row">
//                 <div className="col-sm-4"></div>
//                 <div className="col-sm-4">
//                     <form>
//                     <input className="form-control searchInput" name="searchString" type="search" placeholder="Search (name or email)" aria-label="Search" value={search.search}
//                     onChange={event => {
//                         // Prevent the location from refreshing
//                         event.preventDefault();

//                         setSearch({ search: event.target.value });
//                     }}></input>
//                     </form>
//                 </div>
//                 <div className="col-sm-4"></div>
//             </div>
//         </div>)

//     }
export default Search;
