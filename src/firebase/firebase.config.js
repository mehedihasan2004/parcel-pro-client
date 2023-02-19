import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuI_dhkFDHnJDK_I1PxBh9LNcJBkN6zfs",
  authDomain: "parcel-pro.firebaseapp.com",
  projectId: "parcel-pro",
  storageBucket: "parcel-pro.appspot.com",
  messagingSenderId: "562531156012",
  appId: "1:562531156012:web:0e4e887585dec795fed189",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
