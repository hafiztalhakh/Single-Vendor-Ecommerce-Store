import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXp7nmi_DfB-IvD5t2bkAnwo7T-XJHWpM",
    authDomain: "simple-ecommerce-store.firebaseapp.com",
    databaseURL: "https://simple-ecommerce-store.firebaseio.com",
    projectId: "simple-ecommerce-store",
    storageBucket: "simple-ecommerce-store.appspot.com",
    messagingSenderId: "124297129518",
    appId: "1:124297129518:web:c0ebb014edcf9f6bd2b9bf",
    measurementId: "G-YGLS5MCQDY"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;