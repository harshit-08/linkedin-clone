import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAqrfwA_nXUaDp8Ioih5mV3oZtDLmNDGi0",
    authDomain: "linkedin-clone-90013.firebaseapp.com",
    projectId: "linkedin-clone-90013",
    storageBucket: "linkedin-clone-90013.appspot.com",
    messagingSenderId: "942046535819",
    appId: "1:942046535819:web:15736c411326880bff348e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };