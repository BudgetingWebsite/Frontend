import classes from  "./Login.module.css";
import "../Main.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mark from "../../github-mark.svg"

import CreateAccount from "../../request/CreateAccount";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function login() {
        navigate("/home", {
            state: {"username": username, "password": password}
        });
    }

    function doRegister() {
        setRegister(true);
    }

    CreateAccount(register, username, password);

    function Title() {
        return (
            <div className={classes.title}>
                <h1>Budgeting Website</h1>
            </div>
        );
    }

    function TextFields() {
        return (
            <div className={classes.text_fields}>
                <TextField label="username" variant="outlined" value={username} onChange={handleUsername}/>
                <TextField label="password" variant="outlined" value={password} onChange={handlePassword}/>
            </div>
        );
    }

    function Buttons() {
        return (
            <div className={classes.buttons}>
                <Button variant="outlined" onClick={login}>login</Button>
                <Button variant="outlined" onClick={doRegister}>register</Button>
            </div>
        );
    }

    function BottomBar() {
        return (
            <div className={classes.bottom_bar}>
                <a href="https://github.com/BudgetingWebsite">
                    <img src={mark} />
                </a>
                <em>Developed by Andrew Moseman</em>
            </div>
        );
    }

    return (
        <html>
        <body>
            <title>Budgeting Website</title>
            <div className={classes.center}>
                <div className={classes.container}>
                    {Title()}
                    {TextFields()}
                    {Buttons()}
                </div>
            </div>
        {BottomBar()}
        </body>
        </html>
    );
}
