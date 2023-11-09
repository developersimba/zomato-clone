import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB7yyZZX3LX7kFRurn_BVNEH5WDVQS9sN8",
  authDomain: "cnn-clone-4fa81.firebaseapp.com",
  projectId: "cnn-clone-4fa81",
  storageBucket: "cnn-clone-4fa81.appspot.com",
  messagingSenderId: "508269912440",
  appId: "1:508269912440:web:e88b85cdc3e7df2c07e88d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)