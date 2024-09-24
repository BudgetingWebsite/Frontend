import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBucket(run, username, password, name, share) {
    const navigate = useNavigate();

    const shareFloat = parseFloat(share);

    useEffect(() => {
        if (!run) {
            return;
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Basic " + btoa(username + ":" + password) },
            body: JSON.stringify({"name": name, "share": shareFloat})
        };
        fetch("http://localhost:8080/bucket", options)
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
