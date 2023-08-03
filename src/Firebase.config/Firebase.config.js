// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDkqBCIyyl19qF1Uub6EO905cBKKwrx6LQ",
     authDomain: "fir-task-todo.firebaseapp.com",
     projectId: "fir-task-todo",
     storageBucket: "fir-task-todo.appspot.com",
     messagingSenderId: "1085893579092",
     appId: "1:1085893579092:web:3b990c64e213d04b41f8c1",
     measurementId: "G-5NJR2R63C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;