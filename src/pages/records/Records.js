import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Records() {
    const { state } = useLocation();
    const username = state["username"]
    const password = state["password"]
    const navigate = useNavigate();

    function addIncome() {
        navigate("/records/add/income", {state: {"username": username, "password": password}})
    }
    function addExpense() {
        navigate("/records/add/expense", {state: {"username": username, "password": password}})
    }

    return (
        <div>
            <Button onClick={addIncome} variant="outlined">
            Add Income
            </Button>
            <Button onClick={addExpense} variant="outlined">
            Add Expense
            </Button>
        </div>
    );
}
