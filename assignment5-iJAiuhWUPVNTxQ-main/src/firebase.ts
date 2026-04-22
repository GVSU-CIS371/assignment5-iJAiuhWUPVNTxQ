import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   // COPY this from your Firebase Console
  //   apiKey: "your-api-key-goes-here",
  //   authDomain: "your-project-name-here.firebaseapp.com",
  //   databaseURL: "https://your-project-name-here.firebaseio.com",
  //   projectId: "your-project-name-here",
  //   storageBucket: "your-project-name.appspot.com",
  //   messagingSenderId: "xxxxxxxx",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;