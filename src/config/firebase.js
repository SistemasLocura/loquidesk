import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAMXZfa6XJbkuNteRwmfV1Cn99ar474ZXQ",
    authDomain: "loquidesk.firebaseapp.com",
    databaseURL: "https://loquidesk.firebaseio.com",
    projectId: "loquidesk",
    storageBucket: "loquidesk.appspot.com",
    messagingSenderId: "501237485476",
    appId: "1:501237485476:web:d695a52314103641fffb31",
    measurementId: "G-476HGV8QHJ"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;