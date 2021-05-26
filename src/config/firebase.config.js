const firebase = require('firebase').default
var firebaseConfig = {
    apiKey: "AIzaSyAu2JAxVoOt5mNTTG6pn9E0cja2KnO-Dtc",
    authDomain: "bloodbank-9aa4c.firebaseapp.com",
    projectId: "bloodbank-9aa4c",
    storageBucket: "bloodbank-9aa4c.appspot.com",
    messagingSenderId: "322870167763",
    appId: "1:322870167763:web:b90eb19934c2c79e232c26",
    measurementId: "G-CY3HC0NYW7"
};
firebase.initializeApp(firebaseConfig)
const googleProvider =  new firebase.auth.GoogleAuthProvider;
const db = firebase.database()
const auth = firebase.auth()
export {db , auth , googleProvider}
