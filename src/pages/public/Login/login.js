import React from "react";
import { useUserContext } from "../../../context/userContext";
import Auth from "../../../context/auth/auth";  
import Dashboard from '../../private/Dashboard/dashboard'
import './login.css';

const Login = () => {   
    const { loading, error, user } = useUserContext();
    
    return (
        <div className="auth-container">
            {error && <p>{error}</p>}   
            {loading ? <h2>Loading...</h2> :  
            <div>{user ? <Dashboard /> : <Auth />}</div>}
        </div>
    );
}

export default Login;