import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBA1a6Uv9rcci27t4sxFo68PhXaHJ9FlW8",
  authDomain: "contact-base-6fb71.firebaseapp.com",
  databaseURL: "https://contact-base-6fb71.firebaseio.com",
  projectId: "contact-base-6fb71",
  storageBucket: "contact-base-6fb71.appspot.com",
  messagingSenderId: "898663921000",
  appId: "1:898663921000:web:ec78cf26884f6c3008d2dd",
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
