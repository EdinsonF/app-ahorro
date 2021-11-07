// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBS4fOCw5tasltXqZrDpt7YtZ1Z6lXrTbY",
 authDomain: "admin-presupuesto.firebaseapp.com",
 projectId: "admin-presupuesto",
 storageBucket: "admin-presupuesto.appspot.com",
 messagingSenderId: "202343603846",
 appId: "1:202343603846:web:087462832bf9d201a8bb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;