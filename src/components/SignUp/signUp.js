import React, {useRef} from "react";
import {useUserContext} from "../../context/userContext";


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
        <div className="signIn-container">
            <h2 className="login-heading">New User</h2>
            <form className="signIn-form" onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Name" type="name" ref={nameRef} />
                <input placeholder="Password" type="password" ref={passwordRef} />
                <button className="submit-btn" type="submit">Sign Up</button>
                <br/><p>Already have an Account? </p>
            </form>
        </div>
    );
};

export default SignUp;