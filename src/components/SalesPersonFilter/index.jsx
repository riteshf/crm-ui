import React from "react";
import {Grid} from "@material-ui/core";

import PersonFilter from "./PersonFilter";
import funnel from "../../img/funnel.png";
import EmployeeCards from "../EmployeeCards";

import TabsFilter from "../TabsFilter";
const options = ["TOP", "BOTTOM"];

const SalesPersonFilter = props => {
    const changeOption = newTimeRange => {
        console.log("new Range", newTimeRange);
    };

    return (
        <>
            <Grid
                container
                spacing={0}
                style={{marginTop: "20px", maxHeight: "50px"}}>
                <Grid item xs={9} style={{paddingRight: "20px"}}>
                    <PersonFilter
                        employees={props.employees}
                        changeSelectedEmployee={props.changeSelectedEmployee}
                    />
                    <Grid
                        container
                        spacing={32}
                        style={{marginTop: "20px"}}
                        direction="row">
                        <Grid item xs={8}>
                            <img
                                src={funnel}
                                style={{maxWidth: "100%"}}
                                alt={funnel}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <EmployeeCards
                                employeeInfos={props.data.employeeInfos}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{paddingLeft: "20px"}}>
                    <TabsFilter options={options} changeOption={changeOption} />
                    <Grid container spacing={2} style={{marginTop: "40px"}}>
                        <EmployeeCards
                            employeeInfos={props.data.employeeInfos}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SalesPersonFilter;
