import firebase from 'firebase/compat/app';
import "firebase/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnPrdydd5deyT36FMgEUhP7LRC6R5794s",
    authDomain: "first-project-tasks.firebaseapp.com",
    projectId: "first-project-tasks",
    storageBucket: "first-project-tasks.appspot.com",
    messagingSenderId: "857902559430",
    appId: "1:857902559430:web:1733f41ac1cec8767fa7c7"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database;