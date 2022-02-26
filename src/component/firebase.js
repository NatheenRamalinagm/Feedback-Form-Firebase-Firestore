import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoN3P1548JsQoA3qvijI5tmiQ7-BkjMOU",
    authDomain: "feedback-form-f942d.firebaseapp.com",
    projectId: "feedback-form-f942d",
    storageBucket: "feedback-form-f942d.appspot.com",
    messagingSenderId: "906993003087",
    appId: "1:906993003087:web:1903815de619e9c943983a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




