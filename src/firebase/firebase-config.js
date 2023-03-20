import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyC-ttGBk2dwvvrRShVWQbWvxjixPW40DmE',
    authDomain: 'blogging-770b2.firebaseapp.com',
    projectId: 'blogging-770b2',
    storageBucket: 'blogging-770b2.appspot.com',
    messagingSenderId: '555556687352',
    appId: '1:555556687352:web:54add5ae09ab29849e5a0d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
