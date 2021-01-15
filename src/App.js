import { Header } from "./components/Header";
import { EmployeeTable } from "./components/EmployeeTable";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
