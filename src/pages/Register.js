import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Register() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]
    const [ result, setResult ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"username": username, "password": password})
        };
        fetch("http://localhost:8080/account", options)
        .then(response => response.status)
        .then(status => {
            if (status == 200) {
                navigate("/home", state);
            }
            else {
                navigate("/")
            }
        })
        .catch(error => setResult(error.toString()));
    }, []);

    return (
        <p>{result}</p>
    );
}
