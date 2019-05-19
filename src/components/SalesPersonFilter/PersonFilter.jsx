import "./style.css";
import React, {useState} from "react";

import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Grid
} from "@material-ui/core";

function PersonFilter(props) {
    const [employeeName, setEmployeeName] = useState(props.employees[0]);

    React.useEffect(() => {
        props.changeSelectedEmployee(employeeName);
    }, [employeeName]);
    return (
        <>
            <Grid
                container
                direction="row"
                spacing={0}
                className="personFilter-tabs">
                <form
                    className={props.root}
                    autoComplete="off"
                    style={{paddingLeft: "10px"}}>
                    <FormControl className={props.formControl}>
                        <InputLabel htmlFor="employee-name">
                            Sales Person
                        </InputLabel>
                        <Select
                            style={{width: "150px", textAlign: "center"}}
                            value={employeeName}
                            onChange={() => setEmployeeName(employeeName)}
                            inputProps={{
                                name: "All Sales Person",
                                id: "employee-name"
                            }}>
                            {props.employees.map((emplyee, id) => (
                                <MenuItem key={id} value={emplyee}>
                                    {emplyee}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </Grid>
        </>
    );
}

export default PersonFilter;
