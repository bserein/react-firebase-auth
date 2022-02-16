import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import Signup from "./scenes/SignUp";


export default function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup setUser={setUser}/>} />
      <Route path="/" element={user
         ? <Welcome user={user} setUser={setUser} /> 
        //  you add the set user as a prop
         : <Login setUser={setUser} />} />
    </Routes>
  );
}
