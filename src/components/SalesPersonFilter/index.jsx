import React from "react";
import TopBottomFilter from "./TopBottomFilter";
import PersonFilter from "./PersonFilter";

const SalesPersonFilter = props => {
  return (
    <div
      className="mdl-grid"
      style={{ paddingTop: "0px", paddingRight: "0px" }}
    >
      <div
        className="mdl-cell mdl-cell--10-col"
        style={{
          marginLeft: "-8px",
          marginRight: "20px",
          marginTop: "0px"
        }}
      >
        <PersonFilter
          employees={props.employees}
          changeSelectedEmployee={props.changeSelectedEmployee}
        />
      </div>
      <div
        className="mdl-cell mdl-cell--2-col"
        style={{
          marginRight: "-8px",
          marginLeft: "20px",
          marginTop: "0px"
        }}
      >
        <TopBottomFilter show={props.show} />
      </div>
    </div>
  );
};

export default SalesPersonFilter;
