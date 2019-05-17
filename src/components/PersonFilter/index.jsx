import "./style.css";
import React, { useState } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function PersonFilter(props) {
  const [employeeName, setEmployeeName] = useState(props.employees[0]);

  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar personFilter-tabs">
        <form
          className={props.root}
          autoComplete="off"
          style={{ paddingLeft: "10px" }}
        >
          <FormControl className={props.formControl}>
            <InputLabel htmlFor="employee-name">Sales Person</InputLabel>
            <Select
              style={{ width: "150px", textAlign: "center" }}
              value={employeeName}
              onChange={() => setEmployeeName(employeeName)}
              inputProps={{
                name: "All Sales Person",
                id: "employee-name"
              }}
            >
              {props.employees.map((emplyee, id) => (
                <MenuItem key={id} value={emplyee}>
                  {emplyee}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default PersonFilter;
