import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-3lzphsG2NcsvcFc3baj2Yk54ggrEMcQ",
    authDomain: "minibook-34de6.firebaseapp.com",
    projectId: "minibook-34de6",
    databaseURL: "https://minibook-34de6-default-rtdb.firebaseio.com/",
    storageBucket: "minibook-34de6.appspot.com",
    messagingSenderId: "817804877849",
    appId: "1:817804877849:web:25c800ba6346ebc23b0a88",
    measurementId: "G-F50SF2XH31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
