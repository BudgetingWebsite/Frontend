import classes from "./AddRecordCommon.module.css";

import * as React from 'react';
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddRecordCommon(
    [when, setWhen],
    [amount, setAmount],
    [category, setCategory],
    [description, setDescription],
    addFunction
) {

    function handleWhen(e) {
        setWhen(e.target.value);
    }
    function handleAmount(e) {
        setAmount(e.target.value);
    }
    function handleCategory(e) {
        setCategory(e.target.value);
    }
    function handleDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <div className={classes.stack}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="when" value={when} onChange={handleWhen} />
            </LocalizationProvider>
            <TextField label="amount" value={amount} onChange={handleAmount} />
            <TextField label="category" value={category} onChange={handleCategory} />
            <TextField label="description" value={description} onChange={handleDescription} />
            <div className={classes.buttons}>
                <Button variant="outlined" onClick={addFunction}>Add</Button>
                <Button variant="outlined">Cancel</Button>
            </div>
        </div>
    );
}
