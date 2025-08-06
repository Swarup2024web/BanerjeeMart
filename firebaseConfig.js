// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Firebase configuration for Banerjee Mart
const firebaseConfig = {
  apiKey: "AIzaSyBbBiAnCjdEcv2PdTRGDuI_eDnTfnnK8g8",
  authDomain: "banerjee-mart.firebaseapp.com",
  projectId: "banerjee-mart",
  storageBucket: "banerjee-mart.firebasestorage.app",
  messagingSenderId: "183628570952",
  appId: "1:183628570952:web:3028bb258001d004d9537d",
  databaseURL: "https://banerjee-mart-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export for use in other files
export { app, database };
