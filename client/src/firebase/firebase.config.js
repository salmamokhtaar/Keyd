// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByThbn7dVB7HGW0yWsEJ8uCDJC-qLJEto",
  authDomain: "mern-book-system.firebaseapp.com",
  projectId: "mern-book-system",
  storageBucket: "mern-book-system.appspot.com",
  messagingSenderId: "703546923190",
  appId: "1:703546923190:web:bdbc011819ef0af09aae17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;