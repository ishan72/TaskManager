import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCLiHci46-TBrYBSiRzTTzHtmlyu7h3wXc",
    authDomain: "fir-react-authentication-295a8.firebaseapp.com",
    databaseURL: "https://fir-react-authentication-295a8.firebaseio.com",
    projectId: "fir-react-authentication-295a8",
    storageBucket: "fir-react-authentication-295a8.appspot.com",
    messagingSenderId: "716096162190",
    appId: "1:716096162190:web:99e5082c3773a376e6bcdf",
    measurementId: "G-4Y9VPBPRC6"
};

firebase.initializeApp(firebaseConfig);
export default firebase;