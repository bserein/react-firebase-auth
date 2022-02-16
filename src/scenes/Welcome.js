import React from "react";
import { Link } from "react-router-dom";
//you also can delete the import react

//you can also put the export default behind the function
export default function Welcome(){
    return (
        <>
        <h1>Welcome</h1>
        <p>Want to leave? <Link to="/signup">logout</Link></p>
        </>
    )
}

