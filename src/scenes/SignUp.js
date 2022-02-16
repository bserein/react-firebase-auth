import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../ConnectAuth'

export default function Signup({ setUser }){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const provider = new GoogleAuthProvider();
// this is a class so you substantiate it with new
//this will be for the google sign in
const auth = getAuth(app);
const handleFormSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        //setUser
        setUser(result.user)
        //navigate to home
        navigate('/')
        //this will take you to the welcome page
    })
    .catch(alert)
    // alert(`Trying to sign up as ${email}`); no longer need this since its connected to firebase
}
//this function is used for the sign up using whatever email you wish
const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    //this will return a promise
    .then(result => {
        //setUser
        setUser(result.user)
        //navigate to home
        navigate('/')
        //this will take you to the welcome page
    })
    .catch(alert)
}
    return (
        <>
        <h1>Signup</h1>
        <hr />
        <form onSubmit={handleFormSubmit}>
                {/* form friendly works for the password and the email because its on the form and everything from under this one will be accessible */}
            <label>Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)}/></label> <br />
            {/* with the type email it already lets it know that you need to put the @ for the email */}
            <label>Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label> <br />
            {/* this took control of the inputs and have a prevent default so the page doesnt reload when its inputted */}
            <input type="submit" value="Sign up"/>
        </form>
        <button 
        onClick={handleGoogleLogin}
        // clickable function 
        style={{
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none'}}>
                Sign in with Google</button>
        <p>Already a user? <Link to="/login">Login</Link></p>
        </>
    )
}