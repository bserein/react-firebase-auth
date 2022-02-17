import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";


//you also can delete the import react

//you can also put the export default behind the function
export default function Welcome({user, setUser}){
    const auth = getAuth();
    //^this closes the connection to firebase 
    console.log(user) //email, displayName, photoURL
const navigate = useNavigate()
//its an automated way of link so it redirects you to a new page
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
       localStorage.clear()
        navigate('/login')
        })
        .catch(console.error())
    };
    return (
        <>
        <h1>Welcome</h1>
        <h2>{localStorage.getItem('displayName') || user.email}</h2>
        {/* user.displayName is no longer saved so you have to rerender it from local storage */}
        {localStorage.getItem('avatar') && (
        <img src={localStorage.getItem('avatar')} alt={'Profile phot0 of logged-in user'} />)} <br/>
        {/* the user.photoURL && had to be removed because you are rerendering through the local storage */}
        {/* had to put a zero because it doesnt like it describing it as photo or picture */}
        {/* <button onClick={() => setUser(false)}>Sign out</button>  <-- this no longer works because of the localstorage, so you can refresh and not reset it*/}
        <button onClick={handleLogout}>Logout</button>

        </>
    )
}

