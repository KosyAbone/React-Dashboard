import React, { useState } from "react";
import SignIn from "../../components/SignIn/signIn";
import SignUp from "../../components/SignUp/signUp"; 
import './auth.css';

const Auth = () => {
    // State to track whether the user is on the sign-in or sign-up form
    const [index, setIndex] = useState(false);
    
    // Function to toggle between sign-in and sign-up forms
    const toggleIndex = () => { 
        setIndex(prevState => !prevState);
    }

    return (
        <div className="container">
            {/* Render either the sign-in or sign-up form based on the 'index' state */}
            {!index ? <SignIn /> : <SignUp />}
            <button className="signIn-signUpLink" onClick={toggleIndex}>{!index ? "Click here to Sign Up" : "Sign In"}</button>
        </div>
    );
}

export default Auth;