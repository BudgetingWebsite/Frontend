import classes from "./AddExpense.module.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import AddEventCommon from "../AddEventCommon";

export default function AddExpense() {
    const [partition, setPartition] = useState("");
    function handlePartition(e) {
        setPartition(e.target.value);
    }

    const [when, setWhen] = useState(null);
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    function handleAdd() {

    }

    return (
        <html>
            <body>
                <div className={classes.container}>
                    <div className={classes.partition}>
                        <TextField label="partition" value={partition} onChange={handlePartition}/>
                    </div>
                    {AddEventCommon([when, setWhen], [amount, setAmount], [category, setCategory], [description, setDescription], handleAdd)}
                </div>
            </body>
        </html>
    );
}
