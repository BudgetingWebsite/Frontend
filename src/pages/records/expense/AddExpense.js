import classes from "./AddExpense.module.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';

import GetBuckets from "../../../request/GetBuckets";

import AddRecordCommon from "../AddRecordCommon";

export default function AddExpense() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]

    const [bucket, setBucket] = useState("");
    function handleBucket(e) {
        setBucket(e.target.value);
    }

    const buckets = GetBuckets(username, password);

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
                    <div className={classes.bucket}>

                        <Select label="bucket" value={bucket} onChange={handleBucket}>
                            {buckets.map(item => (
                                <div>{item.name}
                                </div>
                            ))}
                        </Select>

                    </div>

                    {AddRecordCommon([when, setWhen], [amount, setAmount], [category, setCategory], [description, setDescription], handleAdd)}

                </div>
            </body>
        </html>
    );
}
