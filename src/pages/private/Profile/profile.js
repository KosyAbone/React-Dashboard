import React from "react";
import { auth } from "../../../firebase";

const Profile = () => {
    const user = auth.currentUser;
    let userName = '';
    let userEmail = '';

    if (user) {
        userName = user.displayName; // User's name
        userEmail = user.email; // User's email address
    }

    return (
        <div>
            <h1>User Profile Information</h1>
            <p>Name: {userName}</p>
            <p>Email Address: {userEmail}</p>
        </div>
    );
}

export default Profile;
