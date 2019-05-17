import "./style.css";
import React, { useState } from "react";

function PersonFilter(props) {
  const [employeeName, setEmployeeName] = useState(props.employees[0]);

  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar timeframe-tabs">
      
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height"  style={{width: '150px'}}>
        <input type="text" value="" className="mdl-textfield__input" id="sample6" readOnly />
        <input type="hidden" value="" name="sample6" />
        <i className="mdl-icon-toggle__label material-icons"></i>
        <ul htmlFor="sample6" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
        {props.employees.map((employee,i ) => <li key={i}  className="mdl-menu__item" data-val={employee}>{employee}</li>)}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonFilter;
