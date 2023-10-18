import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage} from 'firebase/storage';   
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCU3PI5-HNlStt66PN02EopLjZ-66nd8Kc",
    authDomain: "xplorer-78774.firebaseapp.com",
    projectId: "xplorer-78774",
    storageBucket: "xplorer-78774.appspot.com",
    messagingSenderId: "746014399055",
    appId: "1:746014399055:web:27fcd90c21b0692c5e683a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();