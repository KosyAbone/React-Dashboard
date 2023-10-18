import React, {useRef} from "react";
import {useUserContext} from "../../context/userContext";
import './signUp.css'

const SignUp = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const { registerUser } = useUserContext();
    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        if (email && name && password) {
            registerUser(email, name, password);
        }
    };
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <h2>New User</h2>
                <form className="form" onSubmit={onSubmit}>
                    <input placeholder="Email" type="email" ref={emailRef} />
                    <input placeholder="Name" type="name" ref={nameRef} />
                    <input placeholder="Password" type="password" ref={passwordRef} />
                </form>
                <button className="signUpBtn" type="submit">Sign Up</button>
                <p>Already have an Account? Sign In</p>
            </div>
        </div>
    );
};

export default SignUp;