import * as React from "react";
import { useState, useEffect } from "react";

export default function GetPartitions(username, password) {
    const [ result, setResult ] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Basic " + btoa(username + ":" + password) },
        };
        fetch("http://localhost:8080/partition", options)
        .then(response => response.json())
        .then(content => setResult(content))
        .catch(error => console.error(error));
    }, []);
    return result;
}
