import React, { useState } from "react";
import SignIn from "../../components/SignIn/signIn";
import SignUp from "../../components/SignUp/signUp"; 
import './auth.css';

const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => { 
        setIndex(prevState => !prevState);
    }
    return (
        <div className="container">
            {!index ? <SignIn /> : <SignUp />}
            <button className="signIn-signUpLink" onClick={toggleIndex}>{!index ? "Click here to Sign Up" : "Sign In"}</button>
        </div>
    );
}

export default Auth;