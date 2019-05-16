import React from "react";
import logo from "./logo.png";
import "./App.css";

import TimeFilter from './components/TimeFilter'

function App() {
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
        <TimeFilter />
      </div>
    </div>
  );
}

export default App;
