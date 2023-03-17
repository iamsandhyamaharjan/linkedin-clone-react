import firebase from "firebase";
const firebaseConfig = {
          apiKey: "AIzaSyAuUrH-d1nV6Fh5JPH4vDDganPHbvqMPZ8",
          authDomain: "linkedin-clone-5de41.firebaseapp.com",
          projectId: "linkedin-clone-5de41",
          storageBucket: "linkedin-clone-5de41.appspot.com",
          messagingSenderId: "137996835391",
          appId: "1:137996835391:web:245c7b65a2cc9a24b6b68a"
        };

        const firebaseApp = firebase.initializeApp(firebaseConfig);
        const db = firebaseApp.firestore();
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        const storage = firebase.storage();

        export{auth, provider, storage};
        export default db;