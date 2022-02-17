import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../ConnectAuth'

export default function Login({ user, setUser }){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const provider = new GoogleAuthProvider();
useEffect(() => {
    const localUser = localStorage.getItem('displayName')
    console.log(localUser, '<-- is localUser from LS')
    if(localUser) {
        setUser(localUser)}
},[])
// this is a class so you substantiate it with new
//^^this will be for the google sign in
const auth = getAuth(app);
const handleFormSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    //change this component to sign in so it remembers the user
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

        localStorage.setItem('displayName', result.user.displayName);
        localStorage.setItem('avatar', result.user.photoURL)
        localStorage.setItem('uid', result.user.uid)
        //this will send the info to the local storage of the users display name
        //this will save a cookie in your local storage that has your display name saved but it doesnt remember becuase logic hasnt been added 

        console.log('this is my result', result.user.displayName)
        //this way so you can see the user id of whos accessing it
        //navigate to home
        navigate('/')
        //this will take you to the welcome page
    })
    .catch(alert)
}
console.log('here is my user from the parent App component',user)
    return (
        <>
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleFormSubmit}>
                {/* form friendly works for the password and the email because its on the form and everything from under this one will be accessible */}
            <label>Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)}/></label> <br />
            {/* with the type email it already lets it know that you need to put the @ for the email */}
            <label>Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label> <br />
            {/* this took control of the inputs and have a prevent default so the page doesnt reload when its inputted */}
            <input type="submit" value="Login"/>
        </form>
        <button 
        onClick={handleGoogleLogin}
        // clickable function 
        style={{
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none'}}>
                Sign in with Google</button>
        <p>Not a user? <Link to="/signup">Sign up</Link></p>
        </>
    )
}