import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtho02k3XJbzhDbZzAX82BhcJ00XXDrfI",
    authDomain: "el-supremo.firebaseapp.com",
    projectId: "el-supremo",
    storageBucket: "el-supremo.appspot.com",
    messagingSenderId: "619589264890",
    appId: "1:619589264890:web:e93254d9bc2c31a940b043"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)