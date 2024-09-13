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

    return (
        <html>
            <body>
            <p>Logged in as {username}</p>
            <p>Funds: {totalFunds}</p>
            <div>{partitions.map(item => (
                <ListItem key={item.name} primaryText={item.name}>
                    <div>{item.name}: ${item.amount/100}</div>
                </ListItem>
            ))}</div>
            <Button>Events</Button>
            <Button>Partitions</Button>
            <Button>Budgets</Button>
            </body>
        </html>
    );
}
