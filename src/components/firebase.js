import firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyA3wHtlQll7NBIrwJzw7yivcKdezUbe90g",
  authDomain: "pixel-heart-production-mails.firebaseapp.com",
  databaseURL: "https://pixel-heart-production-mails.firebaseio.com",
  projectId: "pixel-heart-production-mails",
  storageBucket: "pixel-heart-production-mails.appspot.com",
  messagingSenderId: "815179189670",
  appId: "1:815179189670:web:4bf32f435e221a5087d367",
  measurementId: "G-8HRC3N4N2Z",
}
// Initialize Firebases
firebase.initializeApp(firebaseConfig)
firebase.analytics()
export const db = firebase.firestore()
