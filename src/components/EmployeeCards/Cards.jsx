import React from "react";
import {Grid} from "@material-ui/core";
import Card from "./Card";

const Cards = props => (
    <Grid container direction="column" spacing={0}>
        {props.employeeInfos.map((employeeInfo, i) => (
            <Card key={i} employeeInfo={employeeInfo} />
        ))}
    </Grid>
);

export default Cards;
