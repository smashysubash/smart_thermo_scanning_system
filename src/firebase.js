import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp ({
  apiKey: "AIzaSyCpHKS9PIpWGXPqJP2BAVbmKLQJj0ge9Xw",
  authDomain: "smarttemp-fcc6d.firebaseapp.com",
  projectId: "smarttemp-fcc6d",
  storageBucket: "smarttemp-fcc6d.appspot.com",
  messagingSenderId: "309371239579",
  appId: "1:309371239579:web:cdcae5b0b9a9b7821f9a3e",
  measurementId: "G-FST372ZY66"
})


export const auth = app.auth()
export default app;