import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount(run, username, password) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!run) {
            return;
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"username": username, "password": password})
        };
        fetch("http://localhost:8080/account", options)
        .then(response => response.status)
        .then(status => {
            if (200 === status) {
                navigate("/home", {
                    state: {"username": username, "password": password}
                });
            }
        })
        .catch(error => console.error(error));
    });
    return 0;
}
