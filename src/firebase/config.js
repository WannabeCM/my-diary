import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyYMelztz6Lnx2bjwET0sj0t863DO-AEk",
  authDomain: "my-diary-148a3.firebaseapp.com",
  projectId: "my-diary-148a3",
  storageBucket: "my-diary-148a3.appspot.com",
  messagingSenderId: "667497717875",
  appId: "1:667497717875:web:fe8c2169b9e086f2ec0a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 파이어베이스 초기화
const appFirestore = getFirestore(app);
//인증 초기화
const appAuth = getAuth();

export { appFirestore, appAuth };
