import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8VlTYQ8iVW1oY6CfiD61SiYO4kxAISec",
  authDomain: "react-blog-project-68e40.firebaseapp.com",
  projectId: "react-blog-project-68e40",
  storageBucket: "react-blog-project-68e40.appspot.com",
  messagingSenderId: "411418936854",
  appId: "1:411418936854:web:3ea49918bf2bb91eb69737"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
