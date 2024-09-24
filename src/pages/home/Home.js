import classes from "./Home.module.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import TotalFunds from "../../request/TotalFunds";
import GetBuckets from "../../request/GetBuckets";

export default function Home() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]
    const [ result, setResult ] = useState("");
    const navigate = useNavigate();

    const totalFunds = TotalFunds(username, password);
    const buckets = GetBuckets(username, password);

    buckets[0] = {"name": "Example", "amount": 0};

    function logout() {
        navigate("/");
    }

    function goToRecords() {
        navigate("/records", {state: {"username": username, "password": password}})
    }

    return (
        <html>
            <body>
            <div className={classes.top_bar}>
                <div><em>{username}</em></div>
                <Button variant="outlined">Account</Button>
                <Button variant="outlined" onClick={logout}>Logout</Button>
            </div>

            <div className={classes.center_bar}>
                <div className={classes.left_column}>
                    <div className={classes.container}>
                        <div>Total: ${totalFunds/100}</div>
                        <div className={classes.buckets}>
                        {buckets.map(item => (
                            <div>{item.name}: ${item.amount/100}</div>
                        ))}</div>
                    </div>
                </div>

                <div className={classes.center_column}>
                    <div className={classes.container}>
                        <div className={classes.buttons}>
                            <Button onClick={goToRecords} variant="outlined">Records</Button>
                            <Button variant="outlined">Buckets</Button>
                            <Button variant="outlined">Budgets</Button>
                            <Button variant="outlined">Statistics</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.right_column}>
                    <div className={classes.container}>
                        <div>budgets go here</div>
                    </div>
                </div>

            </div>


            <div className={classes.bottom_bar}>
                <div>example</div>
            </div>
            </body>
        </html>
    );
}
