// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfS1qOfcGpsEWx9M8WdzFLOqOBNgJzjwY",
  authDomain: "proyectofinalreactjsmatrangolo.firebaseapp.com",
  projectId: "proyectofinalreactjsmatrangolo",
  storageBucket: "proyectofinalreactjsmatrangolo.appspot.com",
  messagingSenderId: "504551157593",
  appId: "1:504551157593:web:0f0f88529df8883b81e648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)