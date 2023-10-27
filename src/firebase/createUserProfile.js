import { collection, addDoc } from 'firebase/firestore';
import { db } from './index'; 

// This function creates a user profile document in Firestore
export const createUserProfile = async (uid, name, email) => {
    try {
      const usersCollection = collection(db, 'users'); // Get the 'users' Firestore collection
      await addDoc(usersCollection, {
        uid,
        name,
        email,
      });
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
};
  
