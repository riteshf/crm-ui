import "./style.css";
import React, { useState } from "react";

const TimeFilter = props => {
  const [activeTab, setActiveTab] = useState("today");

  const getCSSAsPerIsActive = name => {
    if (isActive(name)) {
      props.changeTimeFilter(name);
      return {
        color: "#2196F3"
      };
    } else {
      return {
        color: "#2C3E50",
        opacity: 0.5
      };
    }
    
  };

  const isActive = name =>  activeTab === name ? "is-active" : null;

  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar timeframe-tabs">
        <a
          href="#today"
          className={"mdl-tabs__tab is-active"}
          onClick={() => setActiveTab("today")}
          style={getCSSAsPerIsActive("today")}
        >
          TODAY
        </a>
        <a
          href="#lastweek"
          className={"mdl-tabs__tab"}
          onClick={() => setActiveTab("lastweek")}
          style={getCSSAsPerIsActive("lastweek")}
        >
          Last WEEK
        </a>
        <a
          href="#lastmonth"
          className={"mdl-tabs__tab"}
          onClick={() => setActiveTab("lastmonth")}
          style={getCSSAsPerIsActive("lastmonth")}
        >
          LAST MONTH
        </a>
        <a
          href="#thisquater"
          className={"mdl-tabs__tab"}
          onClick={() => setActiveTab("thisquater")}
          style={getCSSAsPerIsActive("thisquater")}
        >
          THIS QUATER
        </a>
        <a
          href="#thisyear"
          className={"mdl-tabs__tab"}
          onClick={() => setActiveTab("thisyear")}
          style={getCSSAsPerIsActive("thisyear")}
        >
          THIS YEAR
        </a>
      </div>
      <div className={"mdl-tabs__panel is-active"} id="today"> </div>
      <div className={"mdl-tabs__panel"} id="lastweek"> </div>
      <div className={"mdl-tabs__panel"} id="lastmonth"> </div>
      <div className={"mdl-tabs__panel"} id="thisquater"> </div>
      <div className={"mdl-tabs__panel"} id="thisyear"> </div>
    </div>
  );
};

export default TimeFilter;
