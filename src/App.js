import logo from "./logo.svg";
import Header from "./components/Header";
import { EmployeeTable } from "./components/EmployeeTable";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <EmployeeTable />
    </div>
  );
}

export default App;
