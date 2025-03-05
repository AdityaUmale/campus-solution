// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
//@ts-ignore
import { getAuth, initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnRbhlJdRmmEf_WO0o4b1NA5r4jL_YwAk",
  authDomain: "campus-solution-a719d.firebaseapp.com",
  projectId: "campus-solution-a719d",
  storageBucket: "campus-solution-a719d.firebasestorage.app",
  messagingSenderId: "877090549670",
  appId: "1:877090549670:web:3507943bbe79ff9e7c2967",
  measurementId: "G-704552XHM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const analytics = getAnalytics(app);