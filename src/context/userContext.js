import {createContext, useContext, useEffect, useState} from "react";
import { createUserProfile } from "../firebase/createUserProfile";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from 'firebase/auth'
import {auth} from '../firebase';
import { toast } from 'react-toastify';
const UserContext = createContext({})

// Custom Hook to access the user context
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to store user data
    const [loading, setLoading] = useState(); // State to track loading status
    const [error, setError] = useState(""); // State to store error messages

    useEffect(() => {
        setLoading(true)
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Function to register a new user
    const registerUser = async (email, name, password) => {
        setLoading(true);
        
        try {
          // Register the user with Firebase Authentication
          const authResult = await createUserWithEmailAndPassword(auth, email, password);
          const { user } = authResult;
          // Update the user's display name
          await updateProfile(user, {
            displayName: name,
          });
          // Create the user profile in the Firestore database
          await createUserProfile(user.uid, name, email);
      
          // Show a success message using react-toastify
            toast.success('Registration Successful!', {
                position: toast.POSITION.BOTTOM_CENTER,
            });
          setError(''); // Clear any previous errors
          setUser(user); // Update the user context with the new user
        } 
        catch (error) {
          setError(error.message);
          console.error('Error registering user:', error);
        } finally {
          setLoading(false);
        }
    };

    // Function to sign in a user
    const signInUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                toast.success('Login Successful!', {
                    position: toast.POSITION.BOTTOM_CENTER,
                });
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    // Function to log out a user
    const logoutUser = () => {
       signOut(auth)
            .then(() => {
                toast.success('Logout Successful!', {
                    position: toast.POSITION.BOTTOM_CENTER,
                });
            })
            .catch((err) => setError(err.message))
    };

    // Function to send a password reset email
    // const forgotPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    // };

    // Create the context value with user data, loading, and functions
    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword
    };

    return  <UserContext.Provider value={contextValue}>
                {children}
            </UserContext.Provider>
}