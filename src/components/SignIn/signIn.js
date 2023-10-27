import React, {useRef} from "react";
import {useUserContext} from "../../context/userContext";
import './signIn.css'

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signInUser, forgotPassword} = useUserContext();
   
    // Function to handle the form submission
    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email && password) {
            signInUser(email, password);
        }
    };

    // Function to handle the "Forgot Password?" link click
    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if(email) {
            // Send a password reset email and clear the email input
            forgotPassword(email).then(() => (emailRef.current.value = ""))
        }
    };

    return (
            <div className="signIn-container">
                <h2 className="login-heading">Login</h2>
                <form className="signIn-form" onSubmit={onSubmit}>
                    <input placeholder="Email" type="email" ref={emailRef} />
                    <input placeholder="Password" type="password" ref={passwordRef} />
                    <button className="submit-btn" type="submit">Sign In</button>
                    <p onClick={forgotPasswordHandler}>Forgot Password?</p>
                </form>
            </div>
    );
};

export default SignIn;