import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRVgl_cjxW5V7w2r9CjZKPJWNZBUH56Z0",
  authDomain: "my-images-fe4b6.firebaseapp.com",
  projectId: "my-images-fe4b6",
  storageBucket: "my-images-fe4b6.appspot.com",
  messagingSenderId: "148578371379",
  appId: "1:148578371379:web:dfa30633c46e59cd1c6046",
  measurementId: "G-D1RTQBLM5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth}
