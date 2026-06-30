// firebase-config.js
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0oO1sWOyV_9LNeI7-a-xROY96MkNU6k8",
  authDomain: "smartdairy-81dd6.firebaseapp.com",
  projectId: "smartdairy-81dd6",
  storageBucket: "smartdairy-81dd6.firebasestorage.app",
  messagingSenderId: "746224887364",
  appId: "1:746224887364:web:f172dfda703fa5c6b5be11",
  measurementId: "G-4CZELYQR2T"
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

export { db };