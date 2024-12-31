
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPxScXQjB5iNtxZY7GpsnBydLQKir4LY8",
  authDomain: "twitter-f871c.firebaseapp.com",
  projectId: "twitter-f871c",
  storageBucket: "twitter-f871c.firebasestorage.app",
  messagingSenderId: "20822438222",
  appId: "1:20822438222:web:53e5cdf471eb8a7ee96e1f",
  measurementId: "G-9JFHHRXF1D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
// const analytics = getAnalytics(app);