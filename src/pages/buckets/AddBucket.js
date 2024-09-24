import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import CreateBucket from "../../request/CreateBucket";

export default function AddBucket() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [ name, setName ] = useState("");
    const [ share, setShare ] = useState("");
    const [ add, setAdd ] = useState(false);

    function handleName(e) {
        setName(e.target.value);
    }

    function handleShare(e) {
        setShare(e.target.value);
    }

    function cancel() {
        navigate("/home", {state: state});
    }

    function addBucket() {
        setAdd(true);
    }

    CreateBucket(add, state["username"], state["password"], name, share);

    return (
        <div>
            <TextField value={name} onChange={handleName} label="name" />
            <TextField value={share} onChange={handleShare} label="share" />
            <Button onClick={addBucket}>add</Button>
            <Button onClick={cancel}>cancel</Button>
        </div>
    );
}
