import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const Auth = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAygfyXd7ZtTF6yWkZyhWPmM2BQ8eJwdpU",
        authDomain: "mdev1001-m2023-ice11-3232b.firebaseapp.com",
        projectId: "mdev1001-m2023-ice11-3232b",
        storageBucket: "mdev1001-m2023-ice11-3232b.appspot.com",
        messagingSenderId: "754808490612",
        appId: "1:754808490612:web:3986ea58b24cc7f7209f21"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}