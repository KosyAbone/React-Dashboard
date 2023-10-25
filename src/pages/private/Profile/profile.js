import React from "react";
import { auth } from "../../../firebase";
import './profile.css';

const Profile = () => {
    const user = auth.currentUser;
    let userId = '';
    let userName = '';
    let userEmail = '';

    if (user) {
        userId = user.uid; // User's ID
        userName = user.displayName; // User's name
        userEmail = user.email; // User's email address
    }

    return (
        <div className="profile-card">
            <h1 className="profile-title">Welcome, {userName || 'user'}!</h1>
            <p className="profile-email">Email Address: {userEmail}</p>
            <p className="profile-id">User ID: {userId}</p>
        </div>
    );
}

export default Profile;