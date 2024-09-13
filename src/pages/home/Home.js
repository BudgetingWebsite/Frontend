import classes from "./Home.module.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import TotalFunds from "../../request/TotalFunds";
import GetPartitions from "../../request/GetPartitions";

export default function Home() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]
    const [ result, setResult ] = useState("");
    const navigate = useNavigate();

    const totalFunds = TotalFunds(username, password);
    const partitions = GetPartitions(username, password);

    partitions[0] = {"name": "Example", "amount": 0};

    function logout() {
        navigate("/");
    }

    return (
        <html>
            <body>
            <div className={classes.top_bar}>
                <p>Account: {username}</p>
                <Button variant="outlined">Account</Button>
                <Button variant="outlined" onClick={logout}>Logout</Button>
            </div>

            <div className={classes.center_bar}>
                <div className={classes.left_column}>
                    <div className={classes.container}>
                        <div>Funds: {totalFunds}</div>
                        <div className={classes.partitions}>
                        <div>Partitions:</div>
                        {partitions.map(item => (
                            <ListItem key={item.name} primaryText={item.name}>
                                <div>{item.name}: ${item.amount/100}</div>
                            </ListItem>
                        ))}</div>
                    </div>
                </div>

                <div className={classes.center_column}>
                    <div className={classes.container}>
                        <div className={classes.buttons}>
                            <Button variant="outlined">Events</Button>
                            <Button variant="outlined">Partitions</Button>
                            <Button variant="outlined">Budgets</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.right_column}>

                </div>

            </div>


            <div className={classes.bottom_bar}>
                <div>example</div>
            </div>
            </body>
        </html>
    );
}
