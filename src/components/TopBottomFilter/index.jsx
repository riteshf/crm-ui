import "./style.css";
import React, { useState } from "react";

function TopBottomFilter(props) {
  const [activeTab, setActiveTab] = useState("top");
  const isActive = name => {
    return activeTab === name ? "is-active" : null;
  };

  const getCSSAsPerIsActive = name => {
    if (isActive(name)) {
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

  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar performance-tabs ">
        <a
          href="#top"
          className={"mdl-tabs__tab is-active"}
          onClick={() => setActiveTab("top")}
          style={getCSSAsPerIsActive("top")}
        >
          TOP
        </a>
        <a
          href="#bottom"
          className={"mdl-tabs__tab"}
          onClick={() => setActiveTab("bottom")}
          style={getCSSAsPerIsActive("bottom")}
        >
          Bottom
        </a>
      </div>
      <div className={"mdl-tabs__panel is-active"} id="top">
        top
      </div>
      <div className={"mdl-tabs__panel"} id="bottom">
        bottom
      </div>
    </div>
  );
}

export default TopBottomFilter;
