import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import AddIncome from "./pages/events/income/AddIncome.js";
import AddExpense from "./pages/events/expense/AddExpense.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events/add/income" element={<AddIncome />} />
        <Route path="/events/add/expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
