import React from "react";
import {Grid} from "@material-ui/core";

import "./App.css";
import {Header, TabsFilter, SalesPersonFilter} from "./components";

const timeFrames = [
    "TODAY",
    "LAST WEEK",
    "LAST MONTH",
    "THIS QUATER",
    "THIS YEAR"
];

function App() {
    const changeTimeFilter = newTimeRange => {
        console.log("new Range", newTimeRange);
    };

    const changeSelectedEmployee = selectedEmplyee => {
        console.log("selected Employee is", selectedEmplyee);
    };

    const show = showEmployee => {
        console.log("show", showEmployee, "Employee");
    };

    const employees = ["All Sales Person", "E1"];
    const employeeInfos = [
        {
            image: "/img/ico-calls.png",
            about: "CALLS",
            total: "15",
            current: "10"
        },
        {
            image: "/img/ico-calls.png",
            about: "WINS",
            total: "1",
            current: "3"
        },
        {
            image: "/img/ico-calls.png",
            about: "INCREMENED REVENUE",
            total: "80k",
            current: "100k"
        }
    ];
    const data = {
        employeeInfos: employeeInfos
    };
    return (
        <>
            <Grid
                className="app-dashboard"
                container
                spacing={0}
                direction="row">
                <Header />
                <TabsFilter
                    changeOption={changeTimeFilter}
                    options={timeFrames}
                />
                <SalesPersonFilter
                    changeSelectedEmployee={changeSelectedEmployee}
                    employees={employees}
                    data={data}
                    show={show}
                />
                {/* <GraphAndCards data={data} /> */}
            </Grid>
        </>
    );
}

export default App;
