// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: "AIzaSyCJ7IHnFyaRZte0BBfksVJhXCY-3GfrYBg",
  authDomain: "the-news-dragon-client-62271.firebaseapp.com",
  projectId: "the-news-dragon-client-62271",
  storageBucket: "the-news-dragon-client-62271.appspot.com",
  messagingSenderId: "517510042410",
  appId: "1:517510042410:web:0095b4c4ea1d7ab4cb4453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;