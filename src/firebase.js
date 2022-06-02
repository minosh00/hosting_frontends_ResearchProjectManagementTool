import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJkO8zyNlEC-16GNHMzkDe-mJvH3bw_10",
  authDomain: "fileuploadreact.firebaseapp.com",
  projectId: "fileuploadreact",
  storageBucket: "fileuploadreact.appspot.com",
  messagingSenderId: "1063458038938",
  appId: "1:1063458038938:web:b69227a2877805b926eb23",
  measurementId: "G-QKYH060RRP",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://fileuploadreact.appspot.com');
export default storage;
