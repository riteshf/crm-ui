import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header row">
        <div className="col-md-4">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="offset-2 col-md-6">
          <p className="App-Dashboard">SALES DASHBOARD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
