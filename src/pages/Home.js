import "./Home.css"
import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import TotalFunds from "../request/TotalFunds";
import GetPartitions from "../request/GetPartitions";

export default function Home() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]
    const [ result, setResult ] = useState("");
    const navigate = useNavigate();

    const totalFunds = TotalFunds(username, password);
    const partitions = GetPartitions(username, password);

    partitions[0] = {"name": "Example", "amount": 0};

    return (
        <html>
            <body>
            <div class="top-bar">
                <p>Account: {username}</p>
            </div>

            <div class="main">
            <div class="left-column">
                <div class="container">
                    <div>Funds: {totalFunds}</div>
                    <div class="partitions">
                    <div>Partitions:</div>
                    {partitions.map(item => (
                        <ListItem key={item.name} primaryText={item.name}>
                            <div>{item.name}: ${item.amount/100}</div>
                        </ListItem>
                    ))}</div>
                </div>
            </div>

            <div class="center-column">
                <div class="container">
                    <div class="buttons">
                        <Button variant="outlined">Events</Button>
                        <Button variant="outlined">Partitions</Button>
                        <Button variant="outlined">Budgets</Button>
                    </div>
                </div>
            </div>

            <div class="right-column">
            </div>

            </div>

            </body>
        </html>
    );
}
