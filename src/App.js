import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import Signup from "./scenes/SignUp";


export default function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={user ? <Welcome /> : <Login/>} />
    </Routes>
  );
}
