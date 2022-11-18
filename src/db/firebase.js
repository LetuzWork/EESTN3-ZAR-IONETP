const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDOBLGw8zLxORilYlLHXOZolb5Op5SzE8s",
  authDomain: "eestn3-zarate-onetp.firebaseapp.com",
  projectId: "eestn3-zarate-onetp",
  storageBucket: "eestn3-zarate-onetp.appspot.com",
  messagingSenderId: "638120678538",
  appId: "1:638120678538:web:1824bfe32168890133c973",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { app, db };
