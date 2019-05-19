import React from "react";
import {Grid, Typography} from "@material-ui/core";

import "./style.css";
import logo from "../../img/logo.png";

const Header = () => (
    <>
        <Grid item xs={4}>
            <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={8} style={{paddingTop: "38px"}}>
            <Typography
                component="h2"
                variant="display3"
                className="dashboard-name">
                SALES DASHBOARD
            </Typography>
        </Grid>
    </>
);

export default Header;
