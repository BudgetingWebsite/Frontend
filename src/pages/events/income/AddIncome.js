import classes from "./AddIncome.module.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import AddEventCommon from "../AddEventCommon";

export default function AddIncome() {
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
                    {AddEventCommon()}
                </div>
            </body>
        </html>
    );
}
