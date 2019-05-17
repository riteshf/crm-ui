import React from "react";
import logo from "./logo.png";
import "./App.css";

import TimeFilter from "./components/TimeFilter";
import SalesPersonFilter from "./components/SalesPersonFilter";

function App() {
  const changeTimeFilter = newTimeRange => {
    console.log("new Range", newTimeRange);
  };

  const changeSelectedEmployee = selectedEmplyee => {
    console.log("selected Employee is", selectedEmplyee);
  };

  const show = showEmployee => {
    console.log("show", showEmployee, "Employee");
  };

  const employees = ["All Sales Person", "E1"];
  return (
    <div className="App">
      <div className="Header mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <h1 className="App-Dashboard">SALES DASHBOARD</h1>
        </div>
      </div>
      <div className="TimeFilter">
        <TimeFilter changeTimeFilter={changeTimeFilter} />
      </div>
      <div className="salesPersonFilter">
        <SalesPersonFilter
          employees={employees}
          changeSelectedEmployee={changeSelectedEmployee}
          show={show}
        />
      </div>
      <div className="chartsAndCards" />
    </div>
  );
}

export default App;
