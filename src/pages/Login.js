import "./Login.css"
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mark from "../github-mark.svg"

import CreateAccount from "../request/CreateAccount";

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

    return (
        <html>
        <head>
            <title>Budgeting Website</title>
        </head>
        <body>
                <div class="center">
                <div class="container">
                    <div class="title">
                        <h1>Budgeting Website</h1>
                    </div>
                    <div class="text-fields">
                        <TextField label="username" variant="outlined" value={username} onChange={handleUsername}/>
                        <TextField label="password" variant="outlined" value={password} onChange={handlePassword}/>
                    </div>
                    <div class="buttons">
                        <Button variant="filled" onClick={login}>login</Button>
                        <Button variant="filled" onClick={doRegister}>register</Button>
                    </div>
                </div>
                </div>

                <div class="bottom-bar">
                    <a href="https://github.com/BudgetingWebsite/Frontend">
                        <img src={mark} />
                    </a>
                    <em>Developed by Andrew Moseman</em>
                </div>
    </body>
        </html>
    );
}
