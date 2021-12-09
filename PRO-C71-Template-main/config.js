import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCZLX9s3sVw0AY_A8q5buGi1W15Z7rVm2M",
    authDomain: "e-rider-a41eb.firebaseapp.com",
    projectId: "e-rider-a41eb",
    storageBucket: "e-rider-a41eb.appspot.com",
    messagingSenderId: "171064041280",
    appId: "1:171064041280:web:8767e0b5df228ab8bb64a5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


