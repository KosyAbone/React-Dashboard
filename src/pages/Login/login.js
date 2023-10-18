import React from "react";
import { useUserContext } from "../../context/userContext";
import Auth from "../../context/auth/auth";  
import Profile from "../Main/profile";

const Login = () => {   
    const { loading, error, user } = useUserContext();
    return (
        <div>
            {error && <p>{error}</p>}   
            {loading ? <h2>Loading...</h2> :  <div>{user ? <Profile /> : <Auth />}</div>}
        </div>
    );
}

export default Login;