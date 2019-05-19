import React, {useState} from "react";
import {Tabs, Tab} from "@material-ui/core";

import "./style.css";

const TimeFilter = props => {
    const [activeTab, setActiveTab] = useState(0);
    const isActive = name => name === props.options[activeTab];
    const getCSSAsPerIsActive = name => {
        if (isActive(name)) {
            props.changeOption(name);
            return {
                color: "#2196F3",
                minWidth: "138px"
            };
        } else {
            return {
                color: "#2C3E50",
                opacity: 0.5,
                minWidth: "138px"
            };
        }
    };

    return (
        <>
            <Tabs
                value={activeTab}
                onChange={(e, v) => setActiveTab(v)}
                className="option-filter">
                {props.options.map(option => (
                    <Tab
                        key={option}
                        label={option}
                        style={getCSSAsPerIsActive(option)}
                    />
                ))}
            </Tabs>
        </>
    );
};

export default TimeFilter;
