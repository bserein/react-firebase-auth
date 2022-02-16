import React from "react";

//you also can delete the import react

//you can also put the export default behind the function
export default function Welcome({user, setUser}){
    console.log(user) //email, displayName, photoURL
    return (
        <>
        <h1>Welcome</h1>
        <h2>{user.displayName || user.email}</h2>
        {user.photoURL && <img src={user.photoURL} alt={'Profile phot0 of logged-in user'} />} <br/>
        {/* had to put a zero because it doesnt like it describing it as photo or picture */}
        <button onClick={() => setUser(false)}>Sign out</button>
        </>
    )
}

