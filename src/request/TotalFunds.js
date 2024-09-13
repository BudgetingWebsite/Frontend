import * as React from "react";
import { useState, useEffect } from "react";

export default function TotalFunds(username, password) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Basic " + btoa(username + ":" + password) },
        };
        fetch("http://localhost:8080/stats/total", options)
        .then(response => response.json())
        .then(content => {
            setTotal(content);
        })
        .catch(error => console.error(error));
    }, []);
    return total;
}
