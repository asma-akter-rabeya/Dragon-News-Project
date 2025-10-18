// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkvjM4c1gFSvVANk6pnd2RIjLADasQ8LQ",
  authDomain: "my-dragon-news-project-49f2e.firebaseapp.com",
  projectId: "my-dragon-news-project-49f2e",
  storageBucket: "my-dragon-news-project-49f2e.firebasestorage.app",
  messagingSenderId: "939668956851",
  appId: "1:939668956851:web:3d7933a5fac68c0e96f2c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app