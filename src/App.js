import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Records from "./pages/records/Records";
import AddIncome from "./pages/records/income/AddIncome.js";
import AddExpense from "./pages/records/expense/AddExpense.js";

import AddBucket from "./pages/buckets/AddBucket.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/records/" element={<Records />} />
        <Route path="/records/add/income" element={<AddIncome />} />
        <Route path="/records/add/expense" element={<AddExpense />} />

        <Route path="/bucket/add" element={<AddBucket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
