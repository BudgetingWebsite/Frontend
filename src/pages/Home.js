import "./Home.css"
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import mark from "../github-mark.svg"

export default function Home() {
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
                        <TextField label="username" variant="outlined"/>
                        <TextField label="password" variant="outlined"/>
                    </div>
                    <div class="buttons">
                        <Button variant="filled">login</Button>
                        <Button variant="filled">register</Button>
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
