import { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    return (
        <>
        <h1>Signup</h1>
        <hr />
        <form>
            <label>Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)}/></label> <br />
            <label>Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label> <br />
            {/* this took control of the inputs and have a prevent default so the page doesnt reload when its inputted */}
            <input type="submit" value="Sign up"/>
        </form>
        <p>lready a user? <Link to="/login">Login</Link></p>
        </>
    )
}