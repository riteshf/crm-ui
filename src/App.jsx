import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";


import TimeFilter from "./components/TimeFilter";
import PersonFilter from "./components/PersonFilter";
import TopBottomFilter from "./components/TopBottomFilter";

function App() {
  const [employeeFilter, setEmployeeFilter] = useState("all");

  const changeTimeFilter = newTimeRange => {
    console.log("new Range", newTimeRange);
  };

  const employees = ["all", "E1"];
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
      <div>
        <TimeFilter changeTimeFilter={changeTimeFilter} />
        <div className="employee-selector">
          <div className="mdl-grid">
            <div
              className="mdl-cell mdl-cell--10-col"
              style={{ marginLeft: "-8px", marginRight: "20px" }}
            >
              <PersonFilter employees={employees}/>
            </div>
            <div
              className="mdl-cell mdl-cell--2-col"
              style={{ marginRight: "-8px", marginLeft: "20px" }}
            >
              <TopBottomFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
